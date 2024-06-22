document.querySelectorAll('#mini_logos img').forEach(logo => {
    logo.addEventListener('click', () => {
        logo.classList.add('jump-animation');
        
        logo.addEventListener('animationend', () => {
            logo.classList.remove('jump-animation');
        });
    });
});