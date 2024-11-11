const video = document.querySelector(".video");
const videoPlayer = document.querySelector(".video .videoPlayer");
const closeBtn = document.querySelector(".video .close-btn");

const playVideo = (videoUrl) => {   

    if (document.pictureInPictureElement == null) {
        video.classList.add("active");
    }

    videoPlayer.src = videoUrl;
}

closeBtn.addEventListener("click", () => {
    video.classList.remove("active");
    videoPlayer.pause();
})

videoPlayer.addEventListener("enterpictureinpicture", () => {
    video.classList.remove("active");
})

videoPlayer.addEventListener("leavepictureinpicture", () => {
    video.classList.add("active");
})


// Login/SignUp 
function redirectToLogin() {
    window.location.href = 'loginSignUp.html';
}
