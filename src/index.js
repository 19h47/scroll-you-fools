/**
 * ScrollYouFools
 *
 * @file index.js
 * @author  Jérémy Levron <jeremylevron@19h47.fr>
 */
import VirtualScroll from 'virtual-scroll';

import clamp from '@19h47/clamp';

export default class ScrollYouFools {
	constructor(element, options) {
		this.bind();

		// Set default options
		this.options = { spring: options.spring || 0.1, ...options };

		this.vars = {
			direction: 0,
			oldScrollValue: 0,
			scrollBottom: 0,
			scrollTarget: 0,
			scrollValue: 0,
			speed: 0,
			spring: this.options.spring,
		};

		this.wrapper = element;

		this.columns = {
			right: element.querySelector('.js-row-right'),
			left: element.querySelector('.js-row-left'),
		};

		this.counter = Math.max(
			this.columns.right.children.length,
			this.columns.left.children.length,
		);

		this.vs = new VirtualScroll();

		this.addEvents();
		this.onResize();
	}

	/**
	 * Bind
	 *
	 * @
	 */
	bind() {
		this.update = this.update.bind(this);
		this.onResize = this.onResize.bind(this);
	}

	/**
	 * update
	 *
	 * @
	 */
	update() {
		// Scroll value
		this.vars.scrollValue +=
			(this.vars.scrollTarget - this.vars.scrollValue) * this.vars.spring;

		this.vars.scrollValue = Math.round(
			clamp(this.vars.scrollValue, -1, this.vars.scrollBottom + 1),
		);

		this.columns.right.style.setProperty(
			'transform',
			`translate3d(0, ${this.vars.scrollValue}px, 0)`,
		);
		this.columns.left.style.setProperty(
			'transform',
			`translate3d(0, -${this.vars.scrollValue}px, 0)`,
		);

		this.vars.oldScrollValue = this.vars.scrollValue;

		return requestAnimationFrame(this.update);
	}

	/**
	 * onScroll
	 *
	 * @
	 */
	onScroll(e) {
		this.vars.scrollTarget += e.deltaY * -1;

		this.vars.scrollTarget = Math.round(
			Math.max(0, Math.min(this.vars.scrollTarget, this.vars.scrollBottom)),
		);
	}

	/**
	 * onResize
	 *
	 * @
	 */
	onResize() {
		const wrapperHeight = this.wrapper.getBoundingClientRect().height;

		this.vars.scrollBottom = wrapperHeight + window.innerHeight * this.counter;
	}

	/**
	 * addEvents
	 *
	 * @
	 */
	addEvents() {
		this.vs.on(this.onScroll, this);
		requestAnimationFrame(this.update);
		window.addEventListener('resize', this.onResize);
	}

	/**
	 * removeEvents
	 *
	 * @
	 */
	removeEvents() {
		this.raf.cancel(this.update);
		requestAnimationFrame(this.update);
		window.removeEventListener('resize', this.onResize);
	}

	/**
	 * destroy
	 *
	 * @
	 */
	destroy() {
		this.removeEvents();
	}
}
