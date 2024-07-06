document.addEventListener('DOMContentLoaded', function() {
	const navbarTitle = document.getElementById('navbar_title');

	navbarTitle.addEventListener('click', function() {
		document.body.classList.toggle('dark-theme');

		// Optionally save the theme preference to localStorage
		if (document.body.classList.contains('dark-theme')) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}
	});

	// Load the theme preference from localStorage and apply it
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === 'dark') {
		document.body.classList.add('dark-theme');
	}
});