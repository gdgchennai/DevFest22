<script lang="ts">
  import Blur from '$lib/section/blur/Blur.svelte';
  import Faq from '$lib/section/faq/FAQ.svelte';
  import Hero from '$lib/section/hero/Hero.svelte';
  import Memories from '$lib/section/memories/Memories.svelte';
  import Partners from '$lib/section/partners/Partners.svelte';
  import Speaker from '$lib/section/speaker/speaker.svelte';
  import Tickets from '$lib/section/tickets/Tickets.svelte';
  import Why from '$lib/section/why/Why.svelte';
  import { onMount } from 'svelte';

onMount(() => {
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const body = document.body;
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) 	{
            posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }
        return { x : posx, y : posy }
    }

    // Custom mouse cursor.
    class CursorFx {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
            this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
            this.bounds = {dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect()};
            this.scale = 1;
            this.opacity = 1;
            this.mousePos = {x:0, y:0};
            this.lastMousePos = {dot: {x:0, y:0}, circle: {x:0, y:0}};
            this.lastScale = 1;
            this.lastOpacity = 1;
            
            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
        }
        render() {
            this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width/2, 1);
            this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height/2, 1);
            this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width/2, 0.15);
            this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height/2, 0.15);
            this.lastScale = lerp(this.lastScale, this.scale, 0.15);
            this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
            this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
            this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
            this.DOM.circle.style.opacity = this.lastOpacity
            requestAnimationFrame(() => this.render());
        }
        enter() {
            cursor.scale = 2.7;
        }
        leave() {
            cursor.scale = 1;
        }
        click() {
            this.lastScale = 1;
            this.lastOpacity = 0;
        }
    }
    
    const cursor = new CursorFx(document.querySelector('.cursor'));

    [...document.querySelectorAll('button, a')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter() );
        link.addEventListener('mouseleave', () => cursor.leave() );
        link.addEventListener('click', () => cursor.click() );
    });
  });
</script>

<svelte:head>
  <title>GDG Chennai - Devfest 2022</title>
  <meta name="description" content="GDG Chennai - Devfest 2022" />
</svelte:head>

<div
  class="flex flex-col items-center justify-start p-8 min-h-screen overflow-hidden"
>
  <div class="cursor">
    <div class="cursor__inner cursor__inner--circle"></div>
    <div class="cursor__inner cursor__inner--dot"></div>
  </div>
  <div class="space-y-16 md:space-y-44">
    <Blur />
    <Hero />
    <Why />
    <Speaker />
    <Tickets />
    <Partners />
    <Memories />
    <Faq />
  </div>
</div>

<style>
  .cursor__inner {	
	z-index: 999999;
	pointer-events: none;
	position: absolute;
	top: 0;
	left: 0;
/* 	mix-blend-mode: difference; */
	border-radius: 50%;
}

.cursor__inner--dot {
	width: 6px;
	height: 6px;
	background: #000;
}

.cursor__inner--circle {
	width: 20px;
	height: 20px;
	border: 1px solid #000;
}

@media only screen and (max-width: 600px) {
  .cursor {
    display: none;
  }
}
</style>
