document.getElementById('title').addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'rgb(36, 41, 46)') {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    } else {
        document.body.style.backgroundColor = '#24292e';
        document.body.style.color = '#ffffff';
    }
});