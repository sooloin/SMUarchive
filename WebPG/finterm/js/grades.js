const gradesData = {
    '1학년 1학기': {
        overallGPA: 3.2,
        majorGPA: 3.0,
        credits: 18,
        courses: [
            { name: '컴퓨터개론', credits: 3, grade: 'B+', major: true },
            { name: '프로그래밍기초', credits: 3, grade: 'B0', major: true },
            { name: '수학1', credits: 3, grade: 'A0', major: false },
            { name: '영어1', credits: 2, grade: 'B+', major: false },
            { name: '교양과목1', credits: 2, grade: 'A+', major: false },
            { name: '교양과목2', credits: 3, grade: 'B0', major: false },
            { name: '교양과목3', credits: 2, grade: 'P', major: false }
        ]
    },
    '1학년 2학기': {
        overallGPA: 3.4,
        majorGPA: 3.3,
        credits: 18,
        courses: [
            { name: '자료구조', credits: 3, grade: 'B+', major: true },
            { name: '객체지향프로그래밍', credits: 3, grade: 'A0', major: true },
            { name: '수학2', credits: 3, grade: 'B+', major: false },
            { name: '영어2', credits: 2, grade: 'A0', major: false },
            { name: '교양과목4', credits: 2, grade: 'A+', major: false },
            { name: '교양과목5', credits: 3, grade: 'B+', major: false },
            { name: '교양과목6', credits: 2, grade: 'P', major: false }
        ]
    },
    '2학년 1학기': {
        overallGPA: 3.5,
        majorGPA: 3.4,
        credits: 18,
        courses: [
            { name: '알고리즘', credits: 3, grade: 'A0', major: true },
            { name: '데이터베이스', credits: 3, grade: 'B+', major: true },
            { name: '운영체제', credits: 3, grade: 'B+', major: true },
            { name: '네트워크', credits: 3, grade: 'A0', major: true },
            { name: '교양과목7', credits: 3, grade: 'B+', major: false },
            { name: '교양과목8', credits: 3, grade: 'A+', major: false }
        ]
    },
    '2학년 2학기': {
        overallGPA: 3.6,
        majorGPA: 3.5,
        credits: 18,
        courses: [
            { name: '소프트웨어공학', credits: 3, grade: 'A0', major: true },
            { name: '컴퓨터그래픽스', credits: 3, grade: 'B+', major: true },
            { name: '인공지능', credits: 3, grade: 'A+', major: true },
            { name: '컴파일러', credits: 3, grade: 'B+', major: true },
            { name: '교양과목9', credits: 3, grade: 'A0', major: false },
            { name: '교양과목10', credits: 3, grade: 'B+', major: false }
        ]
    },
    '3학년 1학기': {
        overallGPA: 3.65,
        majorGPA: 3.55,
        credits: 18,
        courses: [
            { name: '컴퓨터보안', credits: 3, grade: 'A+', major: true },
            { name: '모바일프로그래밍', credits: 3, grade: 'B+', major: true },
            { name: '빅데이터분석', credits: 3, grade: 'A0', major: true },
            { name: '임베디드시스템', credits: 3, grade: 'B+', major: true },
            { name: '교양과목11', credits: 3, grade: 'A+', major: false },
            { name: '교양과목12', credits: 3, grade: 'B0', major: false }
        ]
    },
    '3학년 2학기': {
        overallGPA: 4.0,
        majorGPA: 4.0,
        credits: 18,
        courses: [
            { name: '웹프로그래밍', credits: 3, grade: 'A+', major: true },
            { name: '컴퓨터구조', credits: 3, grade: 'A+', major: true },
            { name: '시스템소프트웨어', credits: 3, grade: 'B+', major: true },
            { name: '분산시스템', credits: 3, grade: 'A+', major: true },
            { name: '사물인터넷프로그래밍', credits: 3, grade: 'B+', major: true },
            { name: '첨단바이오테크개론', credits: 3, grade: 'A+', major: true }
        ]
    },
    '4학년 1학기': {
        overallGPA: null,
        majorGPA: null,
        credits: 0,
        courses: []
    },
    '4학년 2학기': {
        overallGPA: null,
        majorGPA: null,
        credits: 0,
        courses: []
    }
};

function calculateOverallStats() {
    let totalCredits = 0;
    let totalMajorCredits = 0;
    let totalPoints = 0;
    let totalMajorPoints = 0;
    const gradeCounts = {
        'A+': 0,
        'A0': 0,
        'B+': 0,
        'B0': 0,
        'P': 0
    };

    const gradePoints = {
        'A+': 4.5,
        'A0': 4.0,
        'B+': 3.5,
        'B0': 3.0,
        'P': 0
    };

    Object.values(gradesData).forEach(semester => {
        semester.courses.forEach(course => {
            if (course.grade !== 'P') {
                totalCredits += course.credits;
                totalPoints += gradePoints[course.grade] * course.credits;
                
                if (course.major) {
                    totalMajorCredits += course.credits;
                    totalMajorPoints += gradePoints[course.grade] * course.credits;
                }
            }
            
            if (gradeCounts.hasOwnProperty(course.grade)) {
                gradeCounts[course.grade] += course.credits;
            }
        });
    });

    const overallGPA = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
    const majorGPA = totalMajorCredits > 0 ? (totalMajorPoints / totalMajorCredits).toFixed(2) : 0;

    return {
        overallGPA: parseFloat(overallGPA),
        majorGPA: parseFloat(majorGPA),
        totalCredits: totalCredits,
        gradeCounts: gradeCounts
    };
}

function createGPATrendChart() {
    const ctx = document.getElementById('gpa-trend-chart');
    if (!ctx) return;

    // 3학년 2학기까지만 차트에 표시
    const chartSemesters = Object.keys(gradesData).filter(sem => {
        const year = parseInt(sem.charAt(0));
        return year <= 3;
    });
    const overallGPAs = chartSemesters.map(sem => gradesData[sem].overallGPA);
    const majorGPAs = chartSemesters.map(sem => gradesData[sem].majorGPA);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartSemesters,
            datasets: [
                {
                    label: '전체',
                    data: overallGPAs,
                    borderColor: '#2856A9',
                    backgroundColor: 'rgba(40, 86, 169, 0.1)',
                    borderWidth: 2.5,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#2856A9',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    fill: true
                },
                {
                    label: '전공',
                    data: majorGPAs,
                    borderColor: '#A8C5E2',
                    backgroundColor: 'rgba(168, 197, 226, 0.1)',
                    borderWidth: 2.5,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#A8C5E2',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 2.0,
                    max: 4.5,
                    ticks: {
                        stepSize: 0.5,
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: '#F0F0F0'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 11
                        },
                        maxRotation: 45,
                        minRotation: 45
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createGradeDistributionChart() {
    const ctx = document.getElementById('grade-distribution-chart');
    if (!ctx) return;

    const stats = calculateOverallStats();
    const gradeCounts = stats.gradeCounts;
    const total = Object.values(gradeCounts).reduce((a, b) => a + b, 0);
    
    const percentages = {
        'B+': total > 0 ? ((gradeCounts['B+'] / total) * 100).toFixed(0) : 0,
        'A+': total > 0 ? ((gradeCounts['A+'] / total) * 100).toFixed(0) : 0,
        'B0': total > 0 ? ((gradeCounts['B0'] / total) * 100).toFixed(0) : 0,
        'P': total > 0 ? ((gradeCounts['P'] / total) * 100).toFixed(0) : 0,
        'A0': total > 0 ? ((gradeCounts['A0'] / total) * 100).toFixed(0) : 0
    };

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['B+', 'A+', 'B0', 'P', 'A0'],
            datasets: [{
                label: '비율',
                data: [percentages['B+'], percentages['A+'], percentages['B0'], percentages['P'], percentages['A0']],
                backgroundColor: [
                    '#A8C5E2',  // B+ - 파스텔 블루
                    '#6BA3D8',  // A+ - 조금 더 진한 파스텔 블루
                    '#B8D4F0',  // B0 - 연한 파스텔 블루
                    '#D0D0D0',  // P - 파스텔 그레이
                    '#8BC4E8'   // A0 - 중간 파스텔 블루
                ],
                borderColor: [
                    '#8BB0D4',  // B+ - 테두리
                    '#5A8FC8',  // A+ - 테두리
                    '#A0C0E0',  // B0 - 테두리
                    '#B8B8B8',  // P - 테두리
                    '#7AB4D8'   // A0 - 테두리
                ],
                borderWidth: 1.5,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.x + '%';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: '#F0F0F0'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createSemesterTabs() {
    const tabsContainer = document.getElementById('semester-tabs');
    if (!tabsContainer) return;

    const semesters = Object.keys(gradesData);
    const currentSemester = '3학년 2학기';

    semesters.forEach((semester, index) => {
        const tab = document.createElement('button');
        tab.className = 'semester-tab';
        tab.textContent = semester;
        if (semester === currentSemester) {
            tab.classList.add('active');
        }
        
        tab.addEventListener('click', function() {
            document.querySelectorAll('.semester-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            displaySemesterDetail(semester);
        });

        tabsContainer.appendChild(tab);
    });
}

function displaySemesterDetail(semester) {
    const detailContainer = document.getElementById('semester-detail');
    if (!detailContainer || !gradesData[semester]) return;

    const data = gradesData[semester];
    
    if (!data.courses || data.courses.length === 0) {
        const timetableButton = '<button class="load-timetable-btn" onclick="window.location.href=\'timetable.html\'">시간표 불러오기</button>';
        let html = `
            <div class="semester-header">
                <div>
                    <div class="semester-title">${semester}</div>
                    <div class="semester-summary"></div>
                </div>
                ${timetableButton}
            </div>
            <table class="courses-table">
                <thead>
                    <tr>
                        <th>과목명</th>
                        <th class="course-credits">학점</th>
                        <th class="course-grade">성적</th>
                        <th class="course-major">전공</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
        detailContainer.innerHTML = html;
        return;
    }

    const majorCredits = data.courses.filter(c => c.major).reduce((sum, c) => sum + c.credits, 0);
    const acquiredCredits = data.courses.reduce((sum, c) => sum + c.credits, 0);
    const timetableButton = '<button class="load-timetable-btn" onclick="window.location.href=\'timetable.html\'">시간표 불러오기</button>';

    let html = `
        <div class="semester-header">
            <div>
                <div class="semester-title">${semester}</div>
                <div class="semester-summary">평점 ${data.overallGPA} 전공${data.majorGPA} 취득 ${acquiredCredits}</div>
            </div>
            ${timetableButton}
        </div>
        <table class="courses-table">
            <thead>
                <tr>
                    <th>과목명</th>
                    <th class="course-credits">학점</th>
                    <th class="course-grade">성적</th>
                    <th class="course-major">전공</th>
                </tr>
            </thead>
            <tbody>
    `;

    data.courses.forEach(course => {
        let gradeClass = '';
        if (course.grade === 'A+') gradeClass = 'grade-a-plus';
        else if (course.grade === 'A0') gradeClass = 'grade-a-zero';
        else if (course.grade === 'B+') gradeClass = 'grade-b-plus';
        else if (course.grade === 'B0') gradeClass = 'grade-b-zero';
        else if (course.grade === 'P') gradeClass = 'grade-p';
        
        html += `
            <tr>
                <td class="course-name">${course.name}</td>
                <td class="course-credits">${course.credits}</td>
                <td class="course-grade ${gradeClass}">${course.grade}</td>
                <td class="course-major">
                    <input type="checkbox" class="major-checkbox" ${course.major ? 'checked' : ''} disabled>
                </td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    detailContainer.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    const stats = calculateOverallStats();
    document.getElementById('overall-gpa').textContent = stats.overallGPA.toFixed(2);
    document.getElementById('major-gpa').textContent = stats.majorGPA.toFixed(2);
    document.getElementById('acquired-credits').textContent = stats.totalCredits;

    createGPATrendChart();
    createGradeDistributionChart();
    createSemesterTabs();
    displaySemesterDetail('3학년 2학기');
});

