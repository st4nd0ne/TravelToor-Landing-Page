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
}) 