document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    // 页面加载完成后，同时淡入所有图片
    function fadeInAllImages() {
        slides.forEach(slide => {
            slide.classList.add('active');
        });
    }

    fadeInAllImages();

    // 显示指定索引的图片，并添加淡入效果
    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            slide.style.opacity = '0'; // 隐藏所有图片
        });
        // 等待图片完全隐藏后再显示下一张
        setTimeout(() => {
            slides[index].style.opacity = '1'; // 显示指定索引的图片
            slides[index].classList.add('active');
        }, 500); // 这里的500ms是等待时间，可以根据需要调整
    }

    // 切换到下一张图片
//    function nextSlide() {
//        currentSlide = (currentSlide + 1) % totalSlides;
//        showSlide(currentSlide);
//    }
//
//    // 切换到上一张图片
//    function prevSlide() {
//        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//        showSlide(currentSlide);
//    }
//
//    // 设置定时器，自动切换图片
//    setInterval(nextSlide, 5000); // 每5秒切换一次图片
//
//    // 可选：为“下一张”和“上一张”按钮添加事件监听器
//    document.getElementById('nextButton').addEventListener('click', nextSlide);
//    document.getElementById('prevButton').addEventListener('click', prevSlide);
});