// 시간표 페이지 JavaScript

// 시간표 표시 함수
function displayTimetable(semester) {
    const timetableContainer = document.querySelector('.timetable-container');
    if (!timetableContainer) return;

    // 2025년 2학기가 아니면 메시지 표시
    if (semester !== '2025년 2학기') {
        timetableContainer.innerHTML = '<div style="text-align: center; padding: 60px 20px; color: #A0A0A0; font-size: 16px;">해당 학기 시간표가 없습니다.</div>';
    } else {
        // 2025년 2학기인 경우 원래 시간표 그리드 표시
        // 페이지 로드 시 원래 HTML이 이미 있으므로 그대로 두면 됨
        // 만약 다른 학기에서 돌아온 경우를 대비해 원래 HTML을 복원
        const originalTimetable = timetableContainer.getAttribute('data-original-html');
        if (originalTimetable) {
            timetableContainer.innerHTML = originalTimetable;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 원래 시간표 HTML 저장 (나중에 복원하기 위해)
    const timetableContainer = document.querySelector('.timetable-container');
    if (timetableContainer && !timetableContainer.getAttribute('data-original-html')) {
        timetableContainer.setAttribute('data-original-html', timetableContainer.innerHTML);
    }

    // 학기 목록 생성 (2025년 2학기 ~ 2020년 1학기, 최신 학기가 위로)
    const semesters = [];
    for (let year = 2025; year >= 2020; year--) {
        semesters.push(`${year}년 2학기`);
        semesters.push(`${year}년 1학기`);
    }
    
    // 학기 선택 드롭다운
    const semesterDropdown = document.querySelector('.semester-dropdown');
    const semesterText = document.querySelector('.semester-text');
    const semesterMenu = document.querySelector('.semester-menu');
    
    if (semesterDropdown && semesterMenu) {
        // 드롭다운 메뉴 항목 생성
        semesters.forEach(semester => {
            const menuItem = document.createElement('div');
            menuItem.className = 'semester-menu-item';
            menuItem.textContent = semester;
            menuItem.addEventListener('click', function(e) {
                e.stopPropagation();
                if (semesterText) {
                    semesterText.textContent = semester;
                }
                semesterMenu.classList.remove('show');
                
                // 학기 변경 시 시간표 표시
                displayTimetable(semester);
            });
            semesterMenu.appendChild(menuItem);
        });
        
        // 드롭다운 토글
        semesterDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            semesterMenu.classList.toggle('show');
        });
        
        // 외부 클릭 시 메뉴 닫기
        document.addEventListener('click', function(e) {
            if (!semesterDropdown.contains(e.target)) {
                semesterMenu.classList.remove('show');
            }
        });
    }
});

