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

// Hiện nav mobile
const navOverlay = document.querySelector('.nav__overlay')
const headerIcon = document.querySelector('.header_icon')
const navMobile = document.querySelector('.nav__mobile')
const closeIcon = document.querySelector('.close-icon')
const mobileLists = document.querySelectorAll('.mobile-list')

//Hàm hiển thị navOverlay 
function showOverlay() {
    navOverlay.classList.add('open')
}
// Hàm ẩn navOverlay đăng kí
function hideOverlay() {
    navOverlay.classList.remove('open')
}

// Nghe hành vi khi click vào icon bar
headerIcon.addEventListener('click',showOverlay)


// Đóng navmobile khi click vào icon close
closeIcon.addEventListener('click',hideOverlay)

for (const mobileList of mobileLists) {
    mobileList.addEventListener('click', hideOverlay)
}

navOverlay.addEventListener('click', hideOverlay)

navMobile.addEventListener('click', function(event) {
    event.stopPropagation()
})

