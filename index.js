const thumbnails = document.querySelectorAll(".tumbImg img");
const mainImage = document.getElementById("mainImage");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;
const images = Array.from(thumbnails).map(img => img.src);

// Thumbnail click
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        currentIndex = index;
        updateMainImage();
        resetAutoSlide();
    });
});

// Update image
function updateMainImage() {
    mainImage.src = images[currentIndex];
    thumbnails.forEach(img => img.classList.remove("active"));
    thumbnails[currentIndex].classList.add("active");
}

// Auto slide
let autoSlide = setInterval(nextSlide, 3000);

function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    updateMainImage();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateMainImage();
}

// Arrow click
rightArrow.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

leftArrow.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

// Reset autoSlide
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
}

updateMainImage();