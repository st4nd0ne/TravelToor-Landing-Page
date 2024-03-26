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
				if (dropdownBtn.classList.contains('open')) {
					dropdownBtn.classList.remove('open')
				}
			})
		}
		else {
			dropdownContent.style.display = 'none';
		}
	})
	dropdownContent.addEventListener('click', function(e) {
		e.stopPropagation()
	})

	const bannerForm = document.querySelector('.banner .left-side > form');
	const bannerFormInput = document.querySelectorAll('.banner .left-side > form input')
	const textInputContainer = document.querySelectorAll('.banner .left-side > form p');
	let lastIndexClicked = null
	bannerFormInput.forEach((inp, index) => {
		inp.addEventListener('click', (e) => {
			if (lastIndexClicked !==  null) {
				// inp[lastIndexClicked].style.display = 'none'
				bannerFormInput[lastIndexClicked].style.display = 'none'
			}
			e.target.style.display = 'block';
			e.target.focus()
			lastIndexClicked = index;
		})
		inp.addEventListener('blur', () => {
			inp.style.display = 'none'
		})
		inp.addEventListener('input', () => {
			textInputContainer.forEach((textInp) => {
				textInputContainer[index].innerHTML = inp.value
			})
		})

	})

	const containerCard = document.querySelector('.card-container');
	const cards = document.querySelectorAll('.card');

	const arrRight = document.querySelector('.container .right');
	const arrLeft = document.querySelector('.container .left');

	let width = 330
	let count = 3;
	console.log(screen.width)
	window.addEventListener('resize', () => {
		if (screen.width < 880 && screen.width > 477) {
			count = 2
			console.log('true')
		}
		else if (screen.width < 476) {
			count = 1
		}
	})
	window.addEventListener('load', () => {
		if (screen.width < 880 && screen.width > 477) {
			count = 2
			console.log('true')
		}
		else if (screen.width < 476) {
			count = 1
		}
	})

	let position = 0;
	arrRight.addEventListener('click', () => {
		position = position - width * count;
		position = Math.max(position, -width * (cards.length - count));
		containerCard.style.marginLeft = position + 'px'
	})

	arrLeft.addEventListener('click', () => {
		position += width * count
		position = Math.min(position, 0)
		containerCard.style.marginLeft = position + 'px'
	})

}) 
