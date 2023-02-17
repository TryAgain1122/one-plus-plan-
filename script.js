const backdrop = document.querySelector('.backdrop');
const SelectPlanButton = document.querySelectorAll ('.plan button');
const modal = document.querySelector('.modal');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const modalNoButton = document.querySelector('.modal__action--negative');


console.log(modalNoButton)

// for modal pop up (Yes ot yes)
for (let i = 0; i < SelectPlanButton.length; i++) {
    SelectPlanButton[i].addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // console.log('button was clicked')
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10); 
    })
}
// this is for back drop when you clicked No. It will going back to default screen
backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    closeModal();
});
// for closing button

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.style.display = 'none';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10); 
}


// for toggle button
toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10); 
    
});