document.addEventListener('astro:page-load', () => {
	document.querySelector('div.navigation-toggle').addEventListener('click', () => {
		console.log('click');
	});
});
