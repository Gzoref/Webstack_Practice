const navBtn = document.querySelector('.navbar__btn');
const dropdownLinks = document.querySelector('.navbar__links');

navBtn.addEventListener('click', function () {

    let current = dropdownLinks.classList.contains('navbar__collapse');

    if (current) {
        dropdownLinks.classList.remove('navbar__collapse');
        navBtn.classList.remove('change');
    
    }else {
        dropdownLinks.classList.add('navbar__collapse');
                    navBtn.classList.add('change');
    }

});
