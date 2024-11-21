let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.opacity = 0; // 修改处：重置透明度
    });
    const slideToDisplay = slides[index];
    slideToDisplay.classList.add('active');
    slideToDisplay.style.opacity = 1; // 修改处：显示当前图片
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // 每3秒切换一次图片

showSlide(currentSlide);

// 为“下一张”和“上一张”按钮添加事件监听器（如果需要）