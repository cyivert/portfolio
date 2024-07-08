document.getElementById('title').addEventListener('click', function() {
    var bodyStyle = document.body.style;
    var logos = document.querySelectorAll('#mini_logos img');
    var theme;

    if (bodyStyle.backgroundColor === 'rgb(36, 41, 46)') {
        bodyStyle.backgroundColor = '#216efc'; // light blue
        bodyStyle.color = '#ffffff'; // change font color to white
        theme = 'light_blue';
    } else if (bodyStyle.backgroundColor === 'rgb(33, 110, 252)') {
        bodyStyle.backgroundColor = '#ffb6c1'; // light pink
        bodyStyle.color = '#000000';
        theme = 'light_pink';
    } else if (bodyStyle.backgroundColor === 'rgb(255, 182, 193)') {
        bodyStyle.backgroundColor = '#ffffff';
        bodyStyle.color = '#000000';
        theme = 'white';
    } else {
        bodyStyle.backgroundColor = '#24292e'; // github black mode
        bodyStyle.color = '#ffffff';
        theme = 'black';
    }

    // Change mini logos
    for (var i = 0; i < logos.length; i++) {
        if (logos[i].src.includes('linkedin')) {
            logos[i].src = logos[i].src.replace((theme === 'black' || theme === 'light_blue') ? '_black_logo' : '_white_logo', (theme === 'black' || theme === 'light_blue') ? '_white_logo' : '_black_logo');
        } else {
            logos[i].src = logos[i].src.replace((theme === 'black' || theme === 'light_blue') ? '_black' : '_white', (theme === 'black' || theme === 'light_blue') ? '_white' : '_black');
        }
    }

    // Save theme preference in localStorage
    localStorage.setItem('theme', theme);
});

// On page load, apply the saved theme preference
window.onload = function() {
    var theme = localStorage.getItem('theme');
    var bodyStyle = document.body.style;
    var logos = document.querySelectorAll('#mini_logos img');

    if (theme === 'light_blue') {
        bodyStyle.backgroundColor = '#216efc';
        bodyStyle.color = '#ffffff';
    } else if (theme === 'light_pink') {
        bodyStyle.backgroundColor = '#ffb6c1';
        bodyStyle.color = '#000000';
    } else if (theme === 'white') {
        bodyStyle.backgroundColor = '#ffffff';
        bodyStyle.color = '#000000';
    } else { // default to 'black'
        bodyStyle.backgroundColor = '#24292e';
        bodyStyle.color = '#ffffff';
    }

    // Change mini logos
    for (var i = 0; i < logos.length; i++) {
        if (logos[i].src.includes('linkedin')) {
            logos[i].src = logos[i].src.replace((theme === 'black' || theme === 'light_blue') ? '_black_logo' : '_white_logo', (theme === 'black' || theme === 'light_blue') ? '_white_logo' : '_black_logo');
        } else {
            logos[i].src = logos[i].src.replace((theme === 'black' || theme === 'light_blue') ? '_black' : '_white', (theme === 'black' || theme === 'light_blue') ? '_white' : '_black');
        }
    }
};
