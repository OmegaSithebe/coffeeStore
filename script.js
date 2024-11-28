// Nav Menu Open/Close
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener("click", () => {
        // Toggle mobile menu visibility
        document.body.classList.toggle("show-mobile-menu");
    });

    // Close menu when the close button is clicked
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());

    // Close menu when any nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => menuOpenButton.click());
    });
}

// Initialize Swiper if Swiper is available
if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 25,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }
    });
}

// Toggle Description Function
function toggleDescription(link) {
    const description = link.nextElementSibling;
    if (description && description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        link.textContent = 'Read less';
    } else if (description) {
        description.classList.add('hidden');
        link.textContent = 'Read more';
    }
}

// Login/SignUp
function redirectToLogin() {
    window.location.href = 'loginSignUp.html';
}

// Logout
function redirectToIndex() {
    window.location.href = 'index.html';
}



function redirectToHomePage(event) {
    event.preventDefault(); 
    window.location.href = 'loginHomePage.html'; 
}

// Submit button Sign Up
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

function showThankYouMessage(event) {
    event.preventDefault(); 
    alert("Thank you, we'll be in touch. Please feel free to browse through the TechnoSpeak site.");
    event.target.reset(); 
}

// Login Options Display
function showLoginOptions() {
    const loginOptions = document.getElementById("login-options");
    if (loginOptions) loginOptions.style.display = "block";
}

// Login Page Functionality
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;

    if (username && password) {
        const userExists = checkUserExists(username);
        if (!userExists) {
            alert("User not found. Redirecting to registration.");
            showSignup();
        } else {
            redirectToHome();
        }
    }
}

// Signup Page Functionality
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const password = document.getElementById("create-password")?.value;
    const confirmPassword = document.getElementById("confirm-password")?.value;

    if (password && confirmPassword && password === confirmPassword) {
        alert("Thank you for signing up! Redirecting to login page.");
        showLogin();
    } else {
        alert("Passwords do not match.");
    }
}

// Show Course Dropdown
function showAssignCourse() {
    const courseDropdown = document.getElementById("course-dropdown");
    if (courseDropdown) courseDropdown.style.display = "block";
}

function proceedWithCourseSelection() {
    const selectedCourse = document.getElementById("course-dropdown")?.value;
    if (selectedCourse) {
        alert(`Proceeding to ${selectedCourse}`);
        showCourseSeries(selectedCourse);
    }
}

// Toggle Login/Signup Display
const signupButton = document.querySelector('.t-signup');
const loginButton = document.querySelector('.t-login');
const siteContainer = document.querySelector('.site');

if (signupButton && loginButton && siteContainer) {
    signupButton.addEventListener('click', function() {
        siteContainer.className = 'site signup-show';
    });

    loginButton.addEventListener('click', function() {
        siteContainer.className = 'site login-show';
    });
}



function showForm() {
    const form = document.getElementById("bookingForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
}



 // Attach an event listener to the form
 document.getElementById('courseBookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Show a popup message
    alert('Our TechnoSpeak team will be in touch shortly, thank you.');

    // Reset the form
    this.reset();
});