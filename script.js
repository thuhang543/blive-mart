// Tabs
document.querySelectorAll('.product-tabs .tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.product-tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Nav highlight
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.bcard, .step-card, .product, .press-card-v2, .kpi, .benefit').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
// Lấy phần tử nút bấm theo ID
const backToTopBtn = document.getElementById("backToTop");

// Lắng nghe sự kiện cuộn chuột của người dùng
window.onscroll = function() {
  // Nếu cuộn xuống quá 300px thì thêm class .show để hiện nút, ngược lại thì ẩn đi
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
};

// Xử lý sự kiện khi người dùng click vào nút
backToTopBtn.addEventListener("click", function() {
  // Cuộn mượt mà lên đầu trang
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});