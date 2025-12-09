document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        const footerHTML = `
<footer class="footer">
    <div class="footer-content">
        <div class="footer-info">
            <span>비누랩스 주식회사</span>
            <span>서울특별시 마포구 양화로 113, 5층</span>
            <span>사업자등록번호 : 407-88-00024 | 직업정보제공사업 신고번호 : J1204020230008</span>
        </div>
        <div class="footer-links">
            <a href="#">이용약관</a>
            <span>|</span>
            <a href="#">개인정보처리방침</a>
            <span>|</span>
            <a href="#">청소년보호정책</a>
            <span>|</span>
            <a href="#">커뮤니티이용규칙</a>
            <span>|</span>
            <a href="#">공지사항</a>
            <span>|</span>
            <a href="#">문의하기</a>
        </div>
        <div class="footer-copyright">© 에브리타임</div>
    </div>
</footer>
        `;
        
        footerContainer.innerHTML = footerHTML;
    }
});

