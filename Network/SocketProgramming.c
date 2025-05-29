#include <stdio.h>
#include <sys/socket.h>
#include <stdlib.h>
#include <unistd.h>
#include <netinet/in.h>
#include <string.h>
#include <arpa/inet.h>
#include <netdb.h>
#include <stdbool.h>
#include <ctype.h>

#define PORT 80             // HTTP 포트
#define BUFFER_SIZE 1024    // 버퍼 크기 (받을수 있는 패킷의 최대 크기)
#define MAX_PACKETS 25      // 최대 패킷 수 (단어의 길이)

typedef struct PacketResponse {
    int sid;         // 학생 ID
    int seq;        // 패킷 시퀀스 번호 (ex, 1, 2, 3) 1~단어길이
    char* payload;  // 패킷 데이터 (ex, "01000001")  
} Packet;

static Packet res[MAX_PACKETS];
static int idx = 0;  // 패킷 응답 인덱스
static char* sid = "202310878";  // 학생 ID


// JSON 응답을 파싱하는 함수
int parse_json_response(const char* response) {
    const char* json_start = strchr(response, '{');  // JSON 시작 부분 찾기
    if (!json_start) {
        fprintf(stderr, "JSON 시작 부분을 찾지 못했습니다.\n");
        return -1;
    }

    printf("JSON 응답: %s\n", json_start);

    // 값을 담을 변수 선언
    int student_id = 0;
    int seq = 0;
    char payload[100] = { 0 };

    // JSON 파싱
    int scanned = sscanf(
        json_start,
        "{\"sid\": %d, \"seq\": %d, \"data\": \"%99[^\"]\"}",
        &student_id, &seq, payload
    );
    if (scanned != 3) {
        fprintf(stderr, "JSON 파싱 실패: scanned = %d\n", scanned);
        return -1;
    }

    // 메모리 할당 및 데이터 저장
    // seq를 인덱스 삼아 저장 -> 패킷이 섞이는 문제 해결
    res[seq].sid = student_id;
    res[seq].seq = seq;
    // res[idx].payload = strdup(payload);  // 문자열 복사
    res[seq].payload = strdup(payload);  // 문자열 복사
    if (!res[seq].payload) {
        fprintf(stderr, "메모리 할당 실패\n");
        return -1;
    }
    idx++;

    return seq;
}

// 소켓을 초기화하고 서버에 연결하는 함수
int initialize_socket(const char* host, struct sockaddr_in* serv_addr) {
    int sock = socket(AF_INET, SOCK_STREAM, 0);
    if (sock < 0) {
        perror("소켓 생성 실패");
        return -1;
    }

    memset(serv_addr, 0, sizeof(*serv_addr));
    serv_addr->sin_family = AF_INET;
    serv_addr->sin_port = htons(PORT);

    struct hostent* he = gethostbyname(host);
    if (!he) {
        fprintf(stderr, "호스트 이름 변환 실패\n");
        close(sock);
        return -1;
    }
    memcpy(&serv_addr->sin_addr, he->h_addr_list[0], he->h_length);

    if (connect(sock, (struct sockaddr*)serv_addr, sizeof(*serv_addr)) < 0) {
        perror("서버 연결 실패");
        close(sock);
        return -1;
    }

    return sock;
}

// 정답 제출용 함수
int submit_answer(int sock, const char *sid, const char *word, char *resp_buffer) {
    char req[BUFFER_SIZE];

    // 1) GET 요청 문자열 생성
    int req_len = snprintf(req, sizeof(req),
        "GET /submit/?word=%s&sid=%s HTTP/1.1\r\n"
        "Host: nisl.smu.ac.kr\r\n"
        "Connection: close\r\n"
        "\r\n",
        word, sid
    );
    if (req_len >= sizeof(req)) {
        fprintf(stderr, "요청 문자열이 버퍼 크기를 초과합니다.\n");
        return -1;
    }

    // 2) 요청 전송
    if (send(sock, req, req_len, 0) < 0) {
        perror("제출 요청 전송 실패");
        return -1;
    }

    // 3) 서버 응답 수신 (한 번만 받습니다)
    int n = recv(sock, resp_buffer, BUFFER_SIZE - 1, 0);
    if (n < 0) {
        perror("제출 응답 수신 실패");
        return -1;
    }
    resp_buffer[n] = '\0';
    return n;
}



// TODO: 서버에 요청을 보내고 응답을 받는 함수
int send_request_and_receive_response(int sock, const char* request, char* buffer) {
    // TODO: 요청 전송
    int sent = send(sock, request, strlen(request), 0);
    if (sent < 0) {
        perror("요청 전송 실패");
        return -1;
    }

    // TODO: 응답 수신
    int len = recv(sock, buffer, BUFFER_SIZE - 1, 0);
    if (len < 0) {
        perror("응답 수신 실패");
        return -1;
    }
    if (len == 0) {
        fprintf(stderr, "서버가 연결을 종료함\n");
        return -1;
    }

    // TODO: 응답 문자열 끝에 Null 문자 추가
    buffer[len] = '\0';

    // //디버깅 : 실제 받은 전체 버퍼를 출력
    // printf("받은 데이터: %s\n", buffer);

    return len;
}

// 리소스를 해제하는 함수
void free_resources() {
    for (int i = 0; i < MAX_PACKETS; i++) {
        if (res[i].payload) {
            free(res[i].payload);
        }
    }
}    

//아래 주석은 parity bit의 위치를 맨 앞과 맨 뒤로 한정한 함수였다.
// //비트열을 문자로 변환하는 함수 
// //맨 뒤 비트를 제거하고 문자로 변환
// char binary_to_char(char* binary_str) {
//     char bit7[8] = {0};
//     //앞의 7비트를 복사
//     memcpy(bit7, binary_str, 7);
//     //2진수 문자열을 문자로 변환
//     int code = strtol(bit7, NULL, 2);
//     return (char)code;
// //비트열을 문자로 변환하는 함수
// //나는 parity bit가 맨 앞에 있었다고 한다!
// //내 답은 international!!
// //맨 앞 비트를 제거하고 문자로 변환
// char binary_to_char(char* binary_str) {
//     char bit7[8] = {0};
//     //binary_str+1에서 앞의 7비트를 복사
//     memcpy(bit7, binary_str+1, 7);
//     //2진수 문자열을 문자로 변환
//     int code = strtol(bit7, NULL, 2);
//     return (char)code;
// }



// 패리티 비트 위치에 따라 비트열을 문자로 변환하는 함수
char decode_bitstring_at_pos(const char *bitstring, int parity_pos) {
    char bit7[8] = {0};
    for (int i = 0, j = 0; i < 8; ++i) {
        if (i == parity_pos) continue;   // 이 인덱스는 패리티
        bit7[j++] = bitstring[i];
    }
    int code = strtol(bit7, NULL, 2);
    return (char)code;
}



//패킷을 배열하여 단어를 조합하는 함수
char *word_from_payloads(Packet *packets, int count, int parity_pos) {
    char *word = malloc(count + 1);
    if (!word) {
        fprintf(stderr, "메모리 할당 실패\n");
        return NULL;
    }

    // 각 패킷을 parity_pos 위치 기준으로 디코딩
    for (int i = 0; i < count; i++) {
        word[i] = decode_bitstring_at_pos(packets[i].payload, parity_pos);
    }

    // 모두 소문자로 정규화
    for (int i = 0; i < count; i++) {
        word[i] = tolower((unsigned char)word[i]);
    }

    word[count] = '\0';
    return word;
}





int main(int argc, char const* argv[]) {
    const char* host = "nisl.smu.ac.kr";
    char request[BUFFER_SIZE];
    bool seen[MAX_PACKETS] = {false};
    int unique_count = 0;

    sprintf(request,
        "GET /%s/ HTTP/1.1\r\n"
        "Host: nisl.smu.ac.kr\r\n"
        "Connection: keep-alive\r\n"
        "User-Agent: comnet/1.0\r\n\r\n",
        sid);

    struct sockaddr_in serv_addr;
    char buffer[BUFFER_SIZE] = { 0 };
    int first_seq = -1;  // 처음 받은 패킷의 seq 번호
    int current_seq = -1;  // 현재 패킷의 seq 번호

    // 소켓 초기화 및 서버 연결
    int sock = initialize_socket(host, &serv_addr);
    if (sock < 0) {
        return -1;
    }

    // 서버와 통신
    // 단어에 들어있는 알파뱃 받아오는 단계 1
    while (1) {
        if (send_request_and_receive_response(sock, request, buffer) < 0) {
            break;
        }

        current_seq = parse_json_response(buffer);
        if (current_seq < 0) {
            fprintf(stderr, "응답 파싱 실패\n");
            break;
        }

        if (seen[current_seq]) break;
        seen[current_seq] = true;
        unique_count++;
        
    }

    // 각 패리티 비트 위치에 대해 시도
    for (int parity_pos = 0; parity_pos < 8; parity_pos++) {
        char *test_word = word_from_payloads(res, unique_count, parity_pos);
        if (test_word) {
            printf("\n%d번째 parity bit 제거 단어 : %s\n", parity_pos, test_word);
            
            // 각 시도마다 새로운 소켓 연결 생성
            int submit_sock = initialize_socket(host, &serv_addr);
            if (submit_sock < 0) {
                fprintf(stderr, "제출용 소켓 생성 실패\n");
                free(test_word);
                continue;
            }

            char response[BUFFER_SIZE];
            int n = submit_answer(submit_sock, sid, test_word, response);
            if (n < 0) {
                fprintf(stderr, "정답 제출 중 오류가 발생했습니다.\n");
            } else {
                printf("서버 응답: %s\n", response);
            }
            
            close(submit_sock);  // 제출용 소켓 닫기
            free(test_word);
        }
    }

    // 리소스 해제 및 소켓 종료
    free_resources();
    close(sock);
    return 0;
}