const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => 
    menuOpenButton.click());

// Close menu when the nav link button is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// Initialise Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoint
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

  function toggleDescription(link) {
    const description = link.nextElementSibling;
    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        link.textContent = 'Read less';
    } else {
        description.classList.add('hidden');
        link.textContent = 'Read more';
    }
}


// Continuation Login Page Process
function showLoginOptions() {
    // Code to show options for Login and Signup, e.g., a modal or dropdown
    document.getElementById("login-options").style.display = "block";
}


// Login Page
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Perform login check here, e.g., fetch data from a backend
    const userExists = checkUserExists(username);

    if (!userExists) {
        alert("User not found. Redirecting to registration.");
        showSignup();
    } else {
        // Logic for successful login
        redirectToHome();
    }
}


// SetUp Page
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("create-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password === confirmPassword) {
        // Save user data and show a thank-you message
        alert("Thank you for signing up! Redirecting to login page.");
        showLogin();
    } else {
        alert("Passwords do not match.");
    }
}

// Assign button
function showAssignCourse() {
    const courseDropdown = document.getElementById("course-dropdown");
    courseDropdown.style.display = "block";
}

function proceedWithCourseSelection() {
    const selectedCourse = document.getElementById("course-dropdown").value;
    if (selectedCourse) {
        // Redirect to course series or display playlist
        alert(`Proceeding to ${selectedCourse}`);
        showCourseSeries(selectedCourse);
    }
}


// Login/Signup Page
const signup = document.querySelector('.t-signup');
const login = document.querySelector('t-login');
const addclass = document.querySelector('.site');
signup.addEventListener('click', function(){
    addclass.className = 'site signup-show';
})

login.addEventListener('click', function(){
    addclass.className = 'site login-show';
})

