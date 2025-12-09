document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        const navHTML = `
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-left">
            <div class="logo-container">
                <a href="index.html" style="display: flex; align-items: center; gap: 16px; text-decoration: none;">
                    <img src="img/로고.png" alt="logo" class="logo-img">
                    <div class="logo-text">
                        <div class="logo-title">EVERY TIME</div>
                        <div class="logo-subtitle">상명대 서울캠</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="nav-center">
            <div class="search-bar">
                <img src="img/search.png" alt="search" class="search-icon">
                <input type="text" placeholder="전체 게시판의 글을 검색하세요" class="search-input">
            </div>
        </div>
        <div class="nav-right">
            <div class="nav-link-wrapper">
                <a href="index.html" class="nav-link nav-link-blue">게시판</a>
                <div class="board-dropdown">
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <a href="#" class="dropdown-item">자유게시판<span class="red-dot">●</span></a>
                            <a href="#" class="dropdown-item">비밀게시판<span class="red-dot">●</span></a>
                            <a href="#" class="dropdown-item">졸업생게시판<span class="red-dot">●</span></a>
                            <a href="#" class="dropdown-item">새내기게시판</a>
                            <a href="#" class="dropdown-item">시사·이슈<span class="red-dot">●</span></a>
                            <a href="#" class="dropdown-item">정보게시판</a>
                        </div>
                        <div class="dropdown-column">
                            <a href="#" class="dropdown-item">이벤트게시판</a>
                            <a href="#" class="dropdown-item">홍보게시판<span class="red-dot">●</span></a>
                            <a href="#" class="dropdown-item">동아리·학회</a>
                            <a href="#" class="dropdown-item">취업·진로</a>
                            <a href="#" class="dropdown-item">오덕 게시판<span class="red-dot">●</span></a>
                            <a href="#" class="dropdown-item dropdown-item-red">게시판 찾기 ></a>
                        </div>
                        <div class="dropdown-column">
                            <a href="#" class="dropdown-item">서울캠퍼스 총학생회</a>
                            <a href="#" class="dropdown-item">교육방송국 SMBS</a>
                            <a href="#" class="dropdown-item">상명대학보</a>
                            <a href="#" class="dropdown-item">서울캠퍼스 대의원회</a>
                            <a href="#" class="dropdown-item">사범대 학생회</a>
                            <a href="#" class="dropdown-item">인문사회과학대학 학생회</a>
                        </div>
                        <div class="dropdown-column">
                            <a href="#" class="dropdown-item">융합공과대학 학생회</a>
                            <a href="#" class="dropdown-item">문화예술대학 학생회</a>
                            <a href="#" class="dropdown-item">경영경제대학 학생회</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="friends.html" class="nav-link">친구</a>
            <a href="#" class="nav-link">책방</a>
            <a href="https://www.campuspick.com/" class="nav-link">캠퍼스픽</a>
        </div>
    </div>
</nav>
        `;
        
        navbarContainer.innerHTML = navHTML;
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isFriendsPage = document.body.classList.contains('friends-page') || currentPage === 'friends.html';
        
        const navLinks = navbarContainer.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        
        if (isFriendsPage) {
            const friendsLink = navbarContainer.querySelector('a[href="friends.html"]');
            if (friendsLink) friendsLink.classList.add('active');
            
            const boardLink = navbarContainer.querySelector('a[href="index.html"]');
            if (boardLink) boardLink.classList.remove('nav-link-blue');
        } else if (currentPage === 'index.html' || currentPage === '') {
            const boardLink = navbarContainer.querySelector('a[href="index.html"]');
            if (boardLink) {
                boardLink.classList.add('active');
                boardLink.classList.add('nav-link-blue');
            }
        }
    }
});

