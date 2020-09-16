gsap.registerPlugin(ScrollTrigger);

var container = document.querySelector('#scroll-container');
const title = document.querySelector('.title');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer--text');
const gallery = document.querySelector('.gallery');
const work = document.querySelectorAll('.work');

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

work.forEach((work) => {
	gsap.fromTo(
		gallery.children,
		{ y: '+=100', opacity: 0 },
		{
			y: 0,
			opacity: 1,
			stagger: 0.4,
			duration: 1,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: work,
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
