document.addEventListener('DOMContentLoaded', () => {
	const sideBar = document.querySelector('.side-bar');
	const sideBarOpen = document.querySelector('.side-bar-open')
	let body = document.querySelector('body');
	const containerSideBar = document.querySelector('.container-side-bar');
	const closeBtn = document.querySelector('.close-btn');

	sideBar.addEventListener('click', function() {
		body.style.position = 'relative';
		containerSideBar.style.display = 'flex';
		containerSideBar.style.transform = 'translateX(0)';

	});
	closeBtn.addEventListener('click' , function() {
		body.style.position = 'static'	
		containerSideBar.style.display = 'none';		
	})

	const dropdownBtn = document.querySelector('.dropdown');
	const dropdownContent = document.querySelector('.dropdown-content');
	const searchInput = document.querySelector('#header-search-input')
	dropdownBtn.addEventListener('click', (e) => {
		dropdownBtn.classList.toggle('open')
		if (dropdownBtn.classList.contains('open')) {
			dropdownContent.style.display = 'block';
			searchInput.focus()
			searchInput.addEventListener('blur', () => {
				dropdownContent.style.display = 'none'
				dropdownBtn.classList.remove('open')
			})
		}
		else {
			dropdownContent.style.display = 'none';
		}
	})
	dropdownContent.addEventListener('click', function(e) {
		e.stopPropagation()

	})
}) 
