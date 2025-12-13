const productImages = document.querySelectorAll('.product-img');

productImages.forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    img.addEventListener('mouseenter', () => {
        img.style.opacity = "0";
        setTimeout(() => {
            img.src = hoverSrc;
            img.style.opacity = "1";
        }, 200); 
    });

    img.addEventListener('mouseleave', () => {
        img.style.opacity = "0";
        setTimeout(() => {
            img.src = originalSrc; 
            img.style.opacity = "1";
        }, 200);
    });
});
