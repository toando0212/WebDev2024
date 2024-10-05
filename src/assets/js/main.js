// Hiệu ứng di chuột qua các mục menu
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// Thêm hiệu ứng chuyển động khi cuộn trang
window.addEventListener('scroll', () => {
    const articles = document.querySelectorAll('.news-article');
    articles.forEach((article, index) => {
        const position = article.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
            article.style.transition = `opacity 0.6s ease, transform 0.6s ease ${index * 0.2}s`;
        } else {
            article.style.opacity = '0';
            article.style.transform = 'translateY(50px)';
        }
    });
});

// Tạo thông báo khi nhấn vào các liên kết
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        alert(`Bạn đã nhấn vào liên kết: ${link.textContent}`);
    });
});