// gsap.registerPlugin(ScrollTrigger);

// const container = document.querySelector('#scroll-container');
// const height = container.clientHeight;
// document.body.style.height = `${height}px`;

// gsap.to(container, {
// 	y: -(height - document.documentElement.clientHeight),
// 	ease: 'none',
// 	scrollTrigger: {
// 		trigger: document.body,
// 		start: 'top top',
// 		end: 'bottom bottom',
// 		scrub: 1
// 	}
// });

gsap.registerPlugin(ScrollTrigger);

var container = document.querySelector('#scroll-container');
const title = document.querySelector('.title');
const header = document.querySelector('.header');
const selected = document.querySelector('.selected');
const portfolio = document.querySelectorAll('.portfolio');
const footer = document.querySelector('.footer--text');
const preview = document.querySelectorAll('.portfolio img');
const modal = document.querySelector('.modal');
const original = document.querySelector('.full-img');
const body = document.querySelector('body');

gsap.fromTo(
	header.children,
	{ opacity: 0 },
	{
		opacity: 1,
		duration: 1
	}
);

gsap.fromTo(
	title.children,
	{ y: '+=50', opacity: 0 },
	{
		y: 0,
		opacity: 1,
		stagger: 0.3,
		duration: 1,
		delay: 1
	}
);

gsap.fromTo(
	selected.children,
	{ y: '+=30', opacity: 0 },
	{
		y: 0,
		opacity: 1,
		stagger: 0.3,
		duration: 1,
		delay: 2
	}
);

portfolio.forEach((portfolio) => {
	gsap.fromTo(
		portfolio.children,
		{ y: '+=100', opacity: 0 },
		{
			y: 0,
			opacity: 1,
			stagger: 0.4,
			duration: 1,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: portfolio,
				start: 'top 60%'
			}
		}
	);
});

gsap.fromTo(
	footer.children,
	{ y: '+=50', opacity: 0 },
	{
		y: 0,
		opacity: 1,
		stagger: 0.3,
		duration: 1,
		delay: 1
	}
);

var height;
function setHeight() {
	height = container.clientHeight;
	document.body.style.height = height + 'px';
}
ScrollTrigger.addEventListener('refreshInit', setHeight);

gsap.to(container, {
	y: () => -(height - document.documentElement.clientHeight),
	ease: 'none',
	scrollTrigger: {
		trigger: document.body,
		start: 'top top',
		end: 'bottom bottom',
		scrub: 1,
		invalidateOnRefresh: true
	}
});

preview.forEach((preview) => {
	preview.addEventListener('click', () => {
		modal.classList.add('open');
		original.classList.add('open');
		const originalSrc = preview.getAttribute('data-original');
		body.style.overflow = 'hidden';
		// original.src = `full/${originalSrc}`;
	});
});

modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modal.classList.remove('open');
		original.classList.remove('open');
		body.style.overflow = 'auto';
	}
});
