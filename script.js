gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('#scroll-container');
const height = container.clientHeight;
document.body.style.height = `${height}px`;

gsap.to(container, {
	y: -(height - document.documentElement.clientHeight),
	ease: 'none',
	scrollTrigger: {
		trigger: document.body,
		start: 'top top',
		end: 'bottom bottom',
		scrub: 1
	}
});
