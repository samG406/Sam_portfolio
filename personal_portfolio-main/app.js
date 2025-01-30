const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

// Smooth scroll to top
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Skills progress bar animation
const progressBars = document.querySelectorAll(".skill-bar");

function animateProgressBars() {
    progressBars.forEach(bar => {
        const value = bar.getAttribute("value");
        bar.style.setProperty("--progress-fill", `${value}%`);
        bar.style.width = `${value}%`;
    });
}

animateProgressBars();

// Skill level toggle functionality
const skillLevels = {
    beginner: {
        html: 50,
        css: 40,
        js: 30,
        node: 20,
        python: 15,
    },
    intermediate: {
        html: 70,
        css: 65,
        js: 60,
        node: 50,
        python: 45,
    },
    advanced: {
        html: 90,
        css: 85,
        js: 75,
        node: 70,
        python: 60,
    },
};

document.querySelectorAll(".skill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const level = btn.dataset.level;
        updateSkills(skillLevels[level]);
    });
});

function updateSkills(levelData) {
    Object.keys(levelData).forEach(skill => {
        const progressBar = document.getElementById(`${skill}-skill`);
        progressBar.value = levelData[skill];
        progressBar.style.width = `${levelData[skill]}%`;
    });
}

// Modal and Hobby Interaction
const hobbyItems = document.querySelectorAll(".hobby-item");
const modal = document.getElementById("hobby-modal");
const modalText = document.getElementById("hobby-detail-text");
const closeModalBtn = document.querySelector(".close-btn");

// Function to display modal with hobby details
hobbyItems.forEach(item => {
    item.addEventListener("click", () => {
        const hobby = item.getAttribute("data-hobby");
        modalText.textContent = `More about my hobby: ${hobby}`;
        modal.style.display = "flex";
    });
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the content area
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
