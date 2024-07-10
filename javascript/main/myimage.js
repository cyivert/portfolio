document.getElementById('myImage').addEventListener('click', function() {
    var miniLogos = document.getElementById('mini_logos');
    if (miniLogos.style.display === 'none' || miniLogos.style.display === '') {
        miniLogos.style.display = 'flex';
        miniLogos.classList.add('move-in');
    } else {
        miniLogos.style.display = 'none';
    }
});

// Add mouseover event listener to move #title down
document.getElementById('myImage').addEventListener('mouseover', function() {
    document.getElementById('title').style.transform = 'translateY(100px)';
});

// Add mouseout event listener to move #title back to its original position
document.getElementById('myImage').addEventListener('mouseout', function() {
    document.getElementById('title').style.transform = 'translateY(0)';
});