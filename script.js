// This is style for front page 
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "☰";
    menuToggle.style.fontSize = "24px";
    menuToggle.style.background = "transparent";
    menuToggle.style.color = "white";
    menuToggle.style.border = "none";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.position = "absolute";
    menuToggle.style.top = "10px";
    menuToggle.style.left = "10px";
    menuToggle.style.display = "none";

    const navContainer = document.querySelector(".container");
    navContainer.prepend(menuToggle);

    menuToggle.addEventListener("click", function () {
        navContainer.classList.toggle("show-menu");
    });

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = "block";
            navContainer.style.flexDirection = "column";
            navContainer.style.alignItems = "center";
            navContainer.style.display = "none";
        } else {
            menuToggle.style.display = "none";
            navContainer.style.display = "flex";
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
// end

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

//This code is for FAQ section question
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".question");

        question.addEventListener("click", function () {
            // Close all other opened FAQs
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            // Toggle current FAQ item
            item.classList.toggle("active");
        });
    });
});
// end

// contact us login page
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const container = document.querySelector(".container");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        // Create a popup message
        const popup = document.createElement("div");
        popup.classList.add("popup-message");
        popup.innerHTML = "✅ Thank you for visiting!";
        
        // Append popup to container
        container.appendChild(popup);

        // Remove popup after 4 seconds
        setTimeout(() => {
            popup.remove();
        }, 4000);

        // Optional: Reset the form
        form.reset();
    });
});
// end

//navbar scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-60px"; // Hide navbar
    } else {
        navbar.style.top = "0"; // Show navbar
    }
    lastScrollTop = currentScroll;
});

// 
// this code is the page how we work no is changing
document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".counter-number");
    let speed = 200; // Adjust speed (lower is faster)

    counters.forEach(counter => {
        let target = +counter.innerText; // Ensure only number is read
        let count = 0;

        let updateCounter = () => {
            let increment = target / speed;
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target; // Ensure final value is exact
            }
        };

        updateCounter();
    });
});

//