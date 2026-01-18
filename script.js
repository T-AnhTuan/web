// 1. Hiệu ứng gõ chữ (Typing Effect)
const text = "Data Strategist.";
let index = 0;
function type() {
    if (index < text.length) {
        document.querySelector(".typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}

// 2. Hiệu ứng Reveal khi cuộn chuột (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// 3. Khởi tạo sau khi trang web tải xong
document.addEventListener("DOMContentLoaded", () => {
    // Kích hoạt hiệu ứng gõ chữ
    setTimeout(type, 1000);

    // Gán observer cho tất cả các phần tử có class 'reveal'
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
});

// 4. Đổi màu Navbar khi cuộn chuột
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.padding = "1rem 10%";
        nav.style.background = "rgba(15, 23, 42, 0.95)";
    } else {
        nav.style.padding = "1.5rem 10%";
        nav.style.background = "rgba(15, 23, 42, 0.8)";
    }
});
