function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Highlight active menu item

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(){

        navLinks.forEach(item=>{
            item.style.color="#111";
        });

        this.style.color="#9f8b5c";
    });
});


const aboutSection = document.querySelector('.about-spa');

window.addEventListener('load', () => {
    aboutSection.style.opacity = '1';
    aboutSection.style.transform = 'translateY(0)';
});

// Book Appointment
const slides = [
    {
        image: "images/facial.png",
        title: "Deep Clean Facial",
        desc: "Deep clean pores dirt blackheads, plus mask on the face, with moisturizing hydrating and moisturizing cream."
    },

    {
        image: "images/massage.png",
        title: "Body Massage",
        desc: "Experience deep relaxation with our full body massage therapy that relieves stress and tension."
    },

    {
        image: "images/luxury.png",
        title: "Luxury Spa",
        desc: "Refresh your body and mind with our luxury spa treatment and rejuvenation sessions."
    },

    {
        image: "images/Skincare.png",
        title: "Skin Treatment",
        desc: "Professional skincare services designed to improve skin texture and natural glow."
    },

    {
        image: "images/Aroma.png",
        title: "Aromatherapy",
        desc: "Enjoy calming essential oils and soothing treatments for total wellness."
    }
];

let currentSlide = 0;

const slideImage = document.getElementById("slideImage");
const slideTitle = document.getElementById("slideTitle");
const slideDesc = document.getElementById("slideDesc");
const dotsContainer = document.getElementById("dots");

function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");

        dot.addEventListener("click", () => {
            currentSlide = index;
            updateSlide();
        });

        dotsContainer.appendChild(dot);
    });
}

function updateSlide() {
    slideImage.src = slides[currentSlide].image;
    slideTitle.textContent = slides[currentSlide].title;
    slideDesc.textContent = slides[currentSlide].desc;

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlide();
}

createDots();
updateSlide();

// Auto Slide Every 5 Seconds
setInterval(nextSlide, 5000);


// open now
// Optional animation when page loads

window.addEventListener("load", () => {

    const card = document.querySelector(".hours-card");

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);

});