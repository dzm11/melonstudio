gsap.registerPlugin(ScrollTrigger);

let height;
let container = document.querySelector('#scroll-container');
const title = document.querySelector('.title');
const header = document.querySelector('.header');
const selected = document.querySelector('.selected');
const wholeFooter = document.querySelector('.footer');
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
		duration: 1
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
		delay: 1.5
	}
);

work.forEach((work) => {
	gsap.fromTo(
		gallery.children,
		{ y: '+=10', opacity: 0 },
		{
			y: 0,
			opacity: 1,
			stagger: 0.2,
			duration: 0.7,
			ease: 'easeInOut',
			delay: 1.5,
			scrollTrigger: {
				trigger: gallery,
				start: 'top 90%'
			}
		}
	);
});
gsap.fromTo(
	wholeFooter,
	{ opacity: 0 },
	{
		y: 0,
		opacity: 1,
		stagger: 0.3,
		duration: 1,
		delay: 4
	}
);

gsap.fromTo(
	footer.children,
	{ y: '+=50', opacity: 0 },
	{
		y: 0,
		opacity: 1,
		stagger: 0.3,
		duration: 1,
		delay: 4.5
	}
);

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
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
}
