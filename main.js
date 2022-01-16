const signUp = document.querySelector('.js-sign-up')
const signBtns = document.querySelectorAll('.js-btn-sign')
const signClose = document.querySelector('.js-close-icon')
const signContainer = document.querySelector('.js-SU-container')

//Hàm hiển thị signUp đăng kí 
function showSignUp() {
    signUp.classList.add('open')
}

// Hàm ẩn signUp đăng kí
function hideSignUp() {
    signUp.classList.remove('open')
}

// Lặp qua từng thẻ Button và nghe hành vi 
for (const signBtn of signBtns) {
    signBtn.addEventListener('click', showSignUp)
}

// Nghe hành vi click vào close
signClose.addEventListener('click', hideSignUp)
signUp.addEventListener('click', hideSignUp)

signContainer.addEventListener('click', function(event) {
    event.stopPropagation()
    }
)

// Ẩn nav mobile khi nhấn nav mobile
// var navMobile = document.getElementById('nav__mobile')
// var navOverlay = document.getElementById('nav__overlay')
// const mobileMenus = document.querySelectorAll('.mobile-list')
// const headerIcon = document.querySelector('.header_icon')

// function hideNavMobile() {
//     navMobile.style.display = "none";
//     navOverlay.style.display = "none";
// }
// function showNavMobile() {
//     navOverlay.style.display = 'block';
// }

// headerIcon.addEventListener('click', showNavMobile)

// for (const mobileMenu of mobileMenus) {
//     mobileMenu.addEventListener('click', hideNavMobile)
// }

 
