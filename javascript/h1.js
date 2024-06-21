document.getElementById('title').addEventListener('click', function() {
    var bodyStyle = document.body.style;
    var logos = document.querySelectorAll('#mini_logos img');

    if (bodyStyle.backgroundColor === 'rgb(36, 41, 46)') {
        bodyStyle.backgroundColor = '#216efc'; // light blue
        bodyStyle.color = '#ffffff'; // change font color to white

        // Change mini logos to white
        for (var i = 0; i < logos.length; i++) {
            if (logos[i].src.includes('linkedin')) {
                logos[i].src = logos[i].src.replace('_black_logo', '_white_logo');
            } else {
                logos[i].src = logos[i].src.replace('_black', '_white');
            }
        }
    } else if (bodyStyle.backgroundColor === 'rgb(33, 110, 252)') {
        bodyStyle.backgroundColor = '#ffb6c1'; // light pink
        bodyStyle.color = '#000000';

        // Change mini logos to black
        for (var i = 0; i < logos.length; i++) {
            if (logos[i].src.includes('linkedin')) {
                logos[i].src = logos[i].src.replace('_white_logo', '_black_logo');
            } else {
                logos[i].src = logos[i].src.replace('_white', '_black');
            }
        }
    } else if (bodyStyle.backgroundColor === 'rgb(255, 182, 193)') {
        bodyStyle.backgroundColor = '#ffffff';
        bodyStyle.color = '#000000';

        // Change mini logos to black
        for (var i = 0; i < logos.length; i++) {
            if (logos[i].src.includes('linkedin')) {
                logos[i].src = logos[i].src.replace('_white_logo', '_black_logo');
            } else {
                logos[i].src = logos[i].src.replace('_white', '_black');
            }
        }
    } else {
        bodyStyle.backgroundColor = '#24292e'; // github black mode
        bodyStyle.color = '#ffffff';

        // Change mini logos to white
        for (var i = 0; i < logos.length; i++) {
            if (logos[i].src.includes('linkedin')) {
                logos[i].src = logos[i].src.replace('_black_logo', '_white_logo');
            } else {
                logos[i].src = logos[i].src.replace('_black', '_white');
            }
        }
    }
});