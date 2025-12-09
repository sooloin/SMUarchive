const timetableHTMLMap = {
    'guhyeonhee': {
        '2024년 2학기': `
<div class="timetable-container">
    <div class="timetable-grid">
        <div class="timetable-header"></div>
        <div class="timetable-header">월</div>
        <div class="timetable-header">화</div>
        <div class="timetable-header">수</div>
        <div class="timetable-header">목</div>
        <div class="timetable-header">금</div>
        <div class="timetable-header">토</div>

        <div class="timetable-period">
            <div class="period-number">1교시</div>
            <div class="period-time">오전 9시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="design" style="grid-row: 2 / 4; grid-column: 3;">
            <div class="course-name">디자인사고와혁신</div>
            <div class="course-instructor">박미영</div>
            <div class="course-room">A301</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">2교시</div>
            <div class="period-time">오전 10시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="media" style="grid-row: 3 / 6; grid-column: 5;">
            <div class="course-name">미디어콘텐츠기획</div>
            <div class="course-instructor">최지은</div>
            <div class="course-room">A205</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">3교시</div>
            <div class="period-time">오전 11시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">4교시</div>
            <div class="period-time">오후 12시</div>
        </div>
        <div class="timetable-cell course-cell" data-course="english" style="grid-row: 5 / 7; grid-column: 2;">
            <div class="course-name">영어회화</div>
            <div class="course-instructor">김서연</div>
            <div class="course-room">B105</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="photo" style="grid-row: 5 / 7; grid-column: 4;">
            <div class="course-name">사진기초</div>
            <div class="course-instructor">이준호</div>
            <div class="course-room">A102</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">5교시</div>
            <div class="period-time">오후 1시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">6교시</div>
            <div class="period-time">오후 2시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="video" style="grid-row: 7 / 9; grid-column: 3;">
            <div class="course-name">영상제작실습</div>
            <div class="course-instructor">정수진</div>
            <div class="course-room">A303</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">7교시</div>
            <div class="period-time">오후 3시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="writing" style="grid-row: 8 / 10; grid-column: 5;">
            <div class="course-name">창의적글쓰기</div>
            <div class="course-instructor">한소희</div>
            <div class="course-room">B203</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">8교시</div>
            <div class="period-time">오후 4시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">9교시</div>
            <div class="period-time">오후 5시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">10교시</div>
            <div class="period-time">오후 6시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
    </div>
</div>`,
        '2025년 2학기': `
<div class="timetable-container">
    <div class="timetable-grid">
        <div class="timetable-header"></div>
        <div class="timetable-header">월</div>
        <div class="timetable-header">화</div>
        <div class="timetable-header">수</div>
        <div class="timetable-header">목</div>
        <div class="timetable-header">금</div>
        <div class="timetable-header">토</div>

        <div class="timetable-period">
            <div class="period-number">1교시</div>
            <div class="period-time">오전 9시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="design" style="grid-row: 2 / 4; grid-column: 3;">
            <div class="course-name">디자인사고와혁신</div>
            <div class="course-instructor">박미영</div>
            <div class="course-room">A301</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">2교시</div>
            <div class="period-time">오전 10시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="media" style="grid-row: 3 / 6; grid-column: 5;">
            <div class="course-name">미디어콘텐츠기획</div>
            <div class="course-instructor">최지은</div>
            <div class="course-room">A205</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">3교시</div>
            <div class="period-time">오전 11시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">4교시</div>
            <div class="period-time">오후 12시</div>
        </div>
        <div class="timetable-cell course-cell" data-course="english" style="grid-row: 5 / 7; grid-column: 2;">
            <div class="course-name">영어회화</div>
            <div class="course-instructor">김서연</div>
            <div class="course-room">B105</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="photo" style="grid-row: 5 / 7; grid-column: 4;">
            <div class="course-name">사진기초</div>
            <div class="course-instructor">이준호</div>
            <div class="course-room">A102</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">5교시</div>
            <div class="period-time">오후 1시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">6교시</div>
            <div class="period-time">오후 2시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="video" style="grid-row: 7 / 9; grid-column: 3;">
            <div class="course-name">영상제작실습</div>
            <div class="course-instructor">정수진</div>
            <div class="course-room">A303</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">7교시</div>
            <div class="period-time">오후 3시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="writing" style="grid-row: 8 / 10; grid-column: 5;">
            <div class="course-name">창의적글쓰기</div>
            <div class="course-instructor">한소희</div>
            <div class="course-room">B203</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">8교시</div>
            <div class="period-time">오후 4시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">9교시</div>
            <div class="period-time">오후 5시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">10교시</div>
            <div class="period-time">오후 6시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
    </div>
</div>`
    },
    'kangminju': {
        '2023년 1학기': `
<div class="timetable-container">
    <div class="timetable-grid">
        <div class="timetable-header"></div>
        <div class="timetable-header">월</div>
        <div class="timetable-header">화</div>
        <div class="timetable-header">수</div>
        <div class="timetable-header">목</div>
        <div class="timetable-header">금</div>
        <div class="timetable-header">토</div>

        <div class="timetable-period">
            <div class="period-number">1교시</div>
            <div class="period-time">오전 9시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="accounting" style="grid-row: 2 / 4; grid-column: 4;">
            <div class="course-name">회계원리</div>
            <div class="course-instructor">김민수</div>
            <div class="course-room">B202</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">2교시</div>
            <div class="period-time">오전 10시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="economics" style="grid-row: 3 / 5; grid-column: 3;">
            <div class="course-name">경제학원론</div>
            <div class="course-instructor">이정호</div>
            <div class="course-room">B103</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">3교시</div>
            <div class="period-time">오전 11시</div>
        </div>
        <div class="timetable-cell course-cell" data-course="statistics" style="grid-row: 4 / 6; grid-column: 2;">
            <div class="course-name">경영통계학</div>
            <div class="course-instructor">박지영</div>
            <div class="course-room">B204</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">4교시</div>
            <div class="period-time">오후 12시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="management" style="grid-row: 5 / 7; grid-column: 5;">
            <div class="course-name">조직관리론</div>
            <div class="course-instructor">최영희</div>
            <div class="course-room">B302</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">5교시</div>
            <div class="period-time">오후 1시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">6교시</div>
            <div class="period-time">오후 2시</div>
        </div>
        <div class="timetable-cell course-cell" data-course="hr" style="grid-row: 7 / 9; grid-column: 2;">
            <div class="course-name">인적자원관리</div>
            <div class="course-instructor">정수진</div>
            <div class="course-room">B206</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">7교시</div>
            <div class="period-time">오후 3시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="operations" style="grid-row: 8 / 10; grid-column: 4;">
            <div class="course-name">운영관리</div>
            <div class="course-instructor">한동욱</div>
            <div class="course-room">B303</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">8교시</div>
            <div class="period-time">오후 4시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">9교시</div>
            <div class="period-time">오후 5시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">10교시</div>
            <div class="period-time">오후 6시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
    </div>
</div>`,
        '2024년 2학기': `
<div class="timetable-container">
    <div class="timetable-grid">
        <div class="timetable-header"></div>
        <div class="timetable-header">월</div>
        <div class="timetable-header">화</div>
        <div class="timetable-header">수</div>
        <div class="timetable-header">목</div>
        <div class="timetable-header">금</div>
        <div class="timetable-header">토</div>

        <div class="timetable-period">
            <div class="period-number">1교시</div>
            <div class="period-time">오전 9시</div>
        </div>
        <div class="timetable-cell course-cell" data-course="business" style="grid-row: 2 / 4; grid-column: 2;">
            <div class="course-name">경영학원론</div>
            <div class="course-instructor">이영희</div>
            <div class="course-room">B201</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">2교시</div>
            <div class="period-time">오전 10시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="mis" style="grid-row: 3 / 6; grid-column: 6;">
            <div class="course-name">경영정보시스템</div>
            <div class="course-instructor">정미라</div>
            <div class="course-room">B301</div>
        </div>

        <div class="timetable-period">
            <div class="period-number">3교시</div>
            <div class="period-time">오전 11시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="marketing" style="grid-row: 4 / 6; grid-column: 3;">
            <div class="course-name">마케팅관리</div>
            <div class="course-instructor">박준호</div>
            <div class="course-room">B305</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">4교시</div>
            <div class="period-time">오후 12시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="finance" style="grid-row: 5 / 7; grid-column: 4;">
            <div class="course-name">재무관리</div>
            <div class="course-instructor">최수진</div>
            <div class="course-room">B102</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">5교시</div>
            <div class="period-time">오후 1시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">6교시</div>
            <div class="period-time">오후 2시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="organization" style="grid-row: 7 / 9; grid-column: 5;">
            <div class="course-name">조직행동론</div>
            <div class="course-instructor">김대현</div>
            <div class="course-room">B208</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">7교시</div>
            <div class="period-time">오후 3시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">8교시</div>
            <div class="period-time">오후 4시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">9교시</div>
            <div class="period-time">오후 5시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">10교시</div>
            <div class="period-time">오후 6시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
    </div>
</div>`,
        '2025년 2학기': `
<div class="timetable-container">
    <div class="timetable-grid">
        <div class="timetable-header"></div>
        <div class="timetable-header">월</div>
        <div class="timetable-header">화</div>
        <div class="timetable-header">수</div>
        <div class="timetable-header">목</div>
        <div class="timetable-header">금</div>
        <div class="timetable-header">토</div>

        <div class="timetable-period">
            <div class="period-number">1교시</div>
            <div class="period-time">오전 9시</div>
        </div>
        <div class="timetable-cell course-cell" data-course="business" style="grid-row: 2 / 4; grid-column: 2;">
            <div class="course-name">경영학원론</div>
            <div class="course-instructor">이영희</div>
            <div class="course-room">B201</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">2교시</div>
            <div class="period-time">오전 10시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="mis" style="grid-row: 3 / 6; grid-column: 6;">
            <div class="course-name">경영정보시스템</div>
            <div class="course-instructor">정미라</div>
            <div class="course-room">B301</div>
        </div>

        <div class="timetable-period">
            <div class="period-number">3교시</div>
            <div class="period-time">오전 11시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="marketing" style="grid-row: 4 / 6; grid-column: 3;">
            <div class="course-name">마케팅관리</div>
            <div class="course-instructor">박준호</div>
            <div class="course-room">B305</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">4교시</div>
            <div class="period-time">오후 12시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="finance" style="grid-row: 5 / 7; grid-column: 4;">
            <div class="course-name">재무관리</div>
            <div class="course-instructor">최수진</div>
            <div class="course-room">B102</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">5교시</div>
            <div class="period-time">오후 1시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">6교시</div>
            <div class="period-time">오후 2시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="organization" style="grid-row: 7 / 9; grid-column: 5;">
            <div class="course-name">조직행동론</div>
            <div class="course-instructor">김대현</div>
            <div class="course-room">B208</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">7교시</div>
            <div class="period-time">오후 3시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">8교시</div>
            <div class="period-time">오후 4시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">9교시</div>
            <div class="period-time">오후 5시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">10교시</div>
            <div class="period-time">오후 6시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
    </div>
</div>`
    },
    'kimyuri': {
        '2024년 2학기': `
<div class="timetable-container">
    <div class="timetable-grid">
        <div class="timetable-header"></div>
        <div class="timetable-header">월</div>
        <div class="timetable-header">화</div>
        <div class="timetable-header">수</div>
        <div class="timetable-header">목</div>
        <div class="timetable-header">금</div>
        <div class="timetable-header">토</div>

        <div class="timetable-period">
            <div class="period-number">1교시</div>
            <div class="period-time">오전 9시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="strategy" style="grid-row: 2 / 4; grid-column: 4;">
            <div class="course-name">경영전략론</div>
            <div class="course-instructor">오세진</div>
            <div class="course-room">B203</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">2교시</div>
            <div class="period-time">오전 10시</div>
        </div>
        <div class="timetable-cell course-cell" data-course="database" style="grid-row: 3 / 5; grid-column: 2;">
            <div class="course-name">데이터베이스시스템</div>
            <div class="course-instructor">한지훈</div>
            <div class="course-room">G205</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">3교시</div>
            <div class="period-time">오전 11시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="digital" style="grid-row: 4 / 6; grid-column: 5;">
            <div class="course-name">디지털마케팅</div>
            <div class="course-instructor">강혜진</div>
            <div class="course-room">B304</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">4교시</div>
            <div class="period-time">오후 12시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="ai" style="grid-row: 5 / 7; grid-column: 3;">
            <div class="course-name">인공지능개론</div>
            <div class="course-instructor">송민수</div>
            <div class="course-room">G301</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">5교시</div>
            <div class="period-time">오후 1시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="cloud" style="grid-row: 6 / 8; grid-column: 6;">
            <div class="course-name">클라우드컴퓨팅</div>
            <div class="course-instructor">임동욱</div>
            <div class="course-room">G103</div>
        </div>

        <div class="timetable-period">
            <div class="period-number">6교시</div>
            <div class="period-time">오후 2시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="software" style="grid-row: 7 / 9; grid-column: 4;">
            <div class="course-name">소프트웨어공학</div>
            <div class="course-instructor">윤태영</div>
            <div class="course-room">G207</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">7교시</div>
            <div class="period-time">오후 3시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">8교시</div>
            <div class="period-time">오후 4시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">9교시</div>
            <div class="period-time">오후 5시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">10교시</div>
            <div class="period-time">오후 6시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
    </div>
</div>`,
        '2025년 2학기': `
<div class="timetable-container">
    <div class="timetable-grid">
        <div class="timetable-header"></div>
        <div class="timetable-header">월</div>
        <div class="timetable-header">화</div>
        <div class="timetable-header">수</div>
        <div class="timetable-header">목</div>
        <div class="timetable-header">금</div>
        <div class="timetable-header">토</div>

        <div class="timetable-period">
            <div class="period-number">1교시</div>
            <div class="period-time">오전 9시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="strategy" style="grid-row: 2 / 4; grid-column: 4;">
            <div class="course-name">경영전략론</div>
            <div class="course-instructor">오세진</div>
            <div class="course-room">B203</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">2교시</div>
            <div class="period-time">오전 10시</div>
        </div>
        <div class="timetable-cell course-cell" data-course="database" style="grid-row: 3 / 5; grid-column: 2;">
            <div class="course-name">데이터베이스시스템</div>
            <div class="course-instructor">한지훈</div>
            <div class="course-room">G205</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">3교시</div>
            <div class="period-time">오전 11시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="digital" style="grid-row: 4 / 6; grid-column: 5;">
            <div class="course-name">디지털마케팅</div>
            <div class="course-instructor">강혜진</div>
            <div class="course-room">B304</div>
        </div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">4교시</div>
            <div class="period-time">오후 12시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="ai" style="grid-row: 5 / 7; grid-column: 3;">
            <div class="course-name">인공지능개론</div>
            <div class="course-instructor">송민수</div>
            <div class="course-room">G301</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">5교시</div>
            <div class="period-time">오후 1시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="cloud" style="grid-row: 6 / 8; grid-column: 6;">
            <div class="course-name">클라우드컴퓨팅</div>
            <div class="course-instructor">임동욱</div>
            <div class="course-room">G103</div>
        </div>

        <div class="timetable-period">
            <div class="period-number">6교시</div>
            <div class="period-time">오후 2시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell course-cell" data-course="software" style="grid-row: 7 / 9; grid-column: 4;">
            <div class="course-name">소프트웨어공학</div>
            <div class="course-instructor">윤태영</div>
            <div class="course-room">G207</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">7교시</div>
            <div class="period-time">오후 3시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">8교시</div>
            <div class="period-time">오후 4시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">9교시</div>
            <div class="period-time">오후 5시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>

        <div class="timetable-period">
            <div class="period-number">10교시</div>
            <div class="period-time">오후 6시</div>
        </div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
        <div class="timetable-cell"></div>
    </div>
</div>`
    }
};

// 친구별 학기별 CSS 파일 매핑
const timetableCSSMap = {
    'guhyeonhee': {
        '2024년 2학기': 'timetable/css/timetable-grid-guhyeonhee.css',
        '2025년 2학기': 'timetable/css/timetable-grid-guhyeonhee.css'
    },
    'kangminju': {
        '2023년 1학기': 'timetable/css/timetable-grid-kangminju-2023-1.css',
        '2024년 2학기': 'timetable/css/timetable-grid-kangminju.css',
        '2025년 2학기': 'timetable/css/timetable-grid-kangminju.css'
    },
    'kimyuri': {
        '2024년 2학기': 'timetable/css/timetable-grid-kimyuri.css',
        '2025년 2학기': 'timetable/css/timetable-grid-kimyuri.css'
    }
};

function getCurrentSemester() {
    const semesterText = document.querySelector('.semester-text');
    return semesterText ? semesterText.textContent : '2025년 2학기';
}

function loadTimetable(friendId, semester = null) {
    const container = document.getElementById('timetable-container');
    if (!container) return;
    
    if (!semester) {
        semester = getCurrentSemester();
    }
    
    const friendTimetables = timetableHTMLMap[friendId];
    if (!friendTimetables) {
        container.innerHTML = '<div style="text-align: center; padding: 60px 20px; color: #A0A0A0; font-size: 16px;">이번학기 시간표가 없습니다.</div>';
        return;
    }
    
    const timetableHTML = friendTimetables[semester];
    if (!timetableHTML) {
        if (semester !== '2025년 2학기') {
            container.innerHTML = '<div style="text-align: center; padding: 60px 20px; color: #A0A0A0; font-size: 16px;">해당 학기 시간표가 없습니다.</div>';
        } else {
            container.innerHTML = '<div style="text-align: center; padding: 60px 20px; color: #A0A0A0; font-size: 16px;">이번학기 시간표가 없습니다.</div>';
        }
        return;
    }
    
    const friendCSS = timetableCSSMap[friendId];
    if (friendCSS && friendCSS[semester]) {
    const existingLink = document.querySelector(`link[data-timetable-css="${friendId}"]`);
    if (existingLink) {
        existingLink.remove();
    }
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
        link.href = friendCSS[semester];
    link.setAttribute('data-timetable-css', friendId);
    document.head.appendChild(link);
    }
    
    container.innerHTML = timetableHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    const semesters = [];
    for (let year = 2025; year >= 2020; year--) {
        semesters.push(`${year}년 2학기`);
        semesters.push(`${year}년 1학기`);
    }
    
    const semesterDropdown = document.querySelector('.semester-dropdown');
    const semesterText = document.querySelector('.semester-text');
    const semesterMenu = document.querySelector('.semester-menu');
    
    if (semesterDropdown && semesterMenu) {
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
                
                const activeFriend = document.querySelector('.friend-list-item.active');
                if (activeFriend) {
                    const friendId = activeFriend.getAttribute('data-friend-id');
                    if (friendId) {
                        loadTimetable(friendId, semester);
                    }
                }
            });
            semesterMenu.appendChild(menuItem);
        });
        
        semesterDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            semesterMenu.classList.toggle('show');
        });
        
        document.addEventListener('click', function(e) {
            if (!semesterDropdown.contains(e.target)) {
                semesterMenu.classList.remove('show');
            }
        });
    }
    
    function sortFriendsList() {
        const container = document.querySelector('.friends-list-container');
        if (!container) return;
        
        const items = Array.from(container.querySelectorAll('.friend-list-item'));
        
        const favorites = items.filter(item => item.getAttribute('data-favorite') === 'true');
        const nonFavorites = items.filter(item => item.getAttribute('data-favorite') === 'false');
        
        favorites.sort((a, b) => {
            const nameA = a.querySelector('.friend-name-text').textContent;
            const nameB = b.querySelector('.friend-name-text').textContent;
            return nameA.localeCompare(nameB, 'ko');
        });
        
        nonFavorites.sort((a, b) => {
            const nameA = a.querySelector('.friend-name-text').textContent;
            const nameB = b.querySelector('.friend-name-text').textContent;
            return nameA.localeCompare(nameB, 'ko');
        });
        
        items.forEach(item => item.remove());
        favorites.forEach(item => container.appendChild(item));
        nonFavorites.forEach(item => container.appendChild(item));
        attachEventListeners();
    }
    
    let eventHandlerAttached = false;
    
    function attachEventListeners() {
        const container = document.querySelector('.friends-list-container');
        if (!container) return;
        
        if (eventHandlerAttached) {
            container.removeEventListener('click', handleContainerClick);
        }
        
        container.addEventListener('click', handleContainerClick);
        eventHandlerAttached = true;
    }
    
    function handleContainerClick(e) {
        const friendItem = e.target.closest('.friend-list-item');
        if (!friendItem) return;
        
        const starIcon = friendItem.querySelector('.star-icon');
        
        if (e.target === starIcon || starIcon.contains(e.target)) {
            e.stopPropagation();
            e.preventDefault();
            
            const isFavorite = friendItem.getAttribute('data-favorite') === 'true';
            
            if (isFavorite) {
                friendItem.setAttribute('data-favorite', 'false');
                starIcon.textContent = '☆';
                starIcon.classList.remove('filled');
            } else {
                friendItem.setAttribute('data-favorite', 'true');
                starIcon.textContent = '★';
                starIcon.classList.add('filled');
            }
            
            sortFriendsList();
        } else {
            e.stopPropagation();
            
            const friendItems = document.querySelectorAll('.friend-list-item');
            friendItems.forEach(friend => friend.classList.remove('active'));
            friendItem.classList.add('active');
            
            const friendId = friendItem.getAttribute('data-friend-id');
            if (friendId) {
                const currentSemester = getCurrentSemester();
                loadTimetable(friendId, currentSemester);
            }
        }
    }
    
    sortFriendsList();
    
    const activeFriend = document.querySelector('.friend-list-item.active');
    if (activeFriend) {
        const friendId = activeFriend.getAttribute('data-friend-id');
        if (friendId) {
            const currentSemester = getCurrentSemester();
            loadTimetable(friendId, currentSemester);
        }
    }
});

