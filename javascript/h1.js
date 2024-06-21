// Get the h1 element
var title = document.getElementById('title');

// Initial size of the h1 element
var initialSize = 72; // adjust as needed

// Minimum size of the h1 element when scrolling down
var minSize = 24; // adjust as needed

window.addEventListener('scroll', function() {
    // Calculate the new size based on scroll position
    var newSize = Math.max(initialSize - window.pageYOffset / 4, minSize);

    // Apply the new size to the h1 element
    title.style.fontSize = newSize + 'px';
});

document.getElementById('title').addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'rgb(36, 41, 46)') {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    } else {
        document.body.style.backgroundColor = '#24292e';
        document.body.style.color = '#ffffff';
    }
});