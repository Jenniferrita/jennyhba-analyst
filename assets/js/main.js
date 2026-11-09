(function () {
	var links = Array.prototype.slice.call(document.querySelectorAll('#nav a'));
	var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
	var sidebar = document.getElementById('sidebar');
	var toggle = document.getElementById('menu-toggle');

	function setActive() {
		var y = window.scrollY + window.innerHeight * 0.35;
		var idx = 0;
		sections.forEach(function (s, i) { if (s && s.offsetTop <= y) idx = i; });
		links.forEach(function (a, i) { a.classList.toggle('active', i === idx); });
	}
	window.addEventListener('scroll', setActive, { passive: true });
	setActive();

	function closeMenu() {
		sidebar.classList.remove('open');
		toggle.setAttribute('aria-expanded', 'false');
	}
	toggle.addEventListener('click', function () {
		var open = sidebar.classList.toggle('open');
		toggle.setAttribute('aria-expanded', String(open));
	});
	links.forEach(function (a) { a.addEventListener('click', closeMenu); });
	document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
})();
