document.getElementById('myImage').addEventListener('click', function() {
    var miniLogos = document.getElementById('mini_logos');
    if (miniLogos.style.display === 'none' || miniLogos.style.display === '') {
        miniLogos.style.display = 'flex';
        miniLogos.classList.add('move-in');
        miniLogos.classList.remove('move-out'); // Remove the move-out class if it's there
    } else {
        miniLogos.classList.remove('move-in'); // Remove the move-in class
        miniLogos.classList.add('move-out'); // Add the move-out class to start the reverse animation
        setTimeout(() => {
            miniLogos.style.display = 'none'; // Hide after animation completes
        }, 500); // Match the timeout to the animation duration
    }
});

if (window.innerWidth > 600) { // Only add the event listeners if the screen is wider than 600px
    // Add mouseover event listener to move #title down
    document.getElementById('myImage').addEventListener('mouseover', function() {
        document.getElementById('title').style.transform = 'translateY(100px)';
    });

    // Add mouseout event listener to move #title back to its original position
    document.getElementById('myImage').addEventListener('mouseout', function() {
        if (window.innerWidth > 600) { // Check screen width before applying transformation
            document.getElementById('title').style.transform = 'translateY(0)';
        }
    });
}