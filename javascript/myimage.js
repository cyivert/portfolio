document.getElementById('myImage').addEventListener('click', function() {
    var miniLogos = document.getElementById('mini_logos');
    if (miniLogos.style.display === 'none' || miniLogos.style.display === '') {
        miniLogos.style.display = 'flex';
        miniLogos.classList.add('move-in');
    } else {
        miniLogos.style.display = 'none';
    }
});