/**
 * ReverseScroll
 *
 * @file ReverseScroll.js
 * @author  Jérémy Levron <jeremylevron@19h47.fr>
 */
import { EventEmitter } from 'events';
import VirtualScroll from 'virtual-scroll';
import raf from 'raf';
import transform from 'prefix';

import clamp from 'Utils/clamp';

export default class ReverseScroll extends EventEmitter {
	constructor(element, options) {
		super();

		this.bind();

		// Set default options
		this.options = Object.assign({
			spring: options.spring || 0.1,
		}, options);

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

		// console.log({ right: this.columns.right, left: this.columns.left });

		this.vs = new VirtualScroll();
		this.transform = transform('transform');

		this.raf = raf;

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
		this.vars.scrollValue += (this.vars.scrollTarget - this.vars.scrollValue) * this.vars.spring;

		this.vars.scrollValue = Math.round(
			clamp(this.vars.scrollValue, -1, this.vars.scrollBottom + 1),
		);

		this.columns.right.style[this.transform] = `translate3d(0, ${this.vars.scrollValue}px, 0)`;
		this.columns.left.style[this.transform] = `translate3d(0, -${this.vars.scrollValue}px, 0)`;

		this.vars.oldScrollValue = this.vars.scrollValue;

		return this.raf(this.update);
	}


	/**
	 * onScroll
	 *
	 * @
	 */
	onScroll(e) {
		this.vars.scrollTarget += e.deltaY * -1;
		// eslint-disable-next-line max-len
		this.vars.scrollTarget = Math.round(
			Math.max(
				0,
				Math.min(
					this.vars.scrollTarget,
					this.vars.scrollBottom,
				),
			),
		);
	}


	/**
	 * onResize
	 *
	 * @
	 */
	onResize() {
		const wrapperHeight = this.wrapper.getBoundingClientRect().height;

		this.vars.scrollBottom = wrapperHeight + (window.innerHeight * this.counter);
	}


	/**
	 * addEvents
	 *
	 * @
	 */
	addEvents() {
		this.vs.on(this.onScroll, this);
		this.raf(this.update);
		window.addEventListener('resize', this.onResize);
	}


	/**
	 * removeEvents
	 *
	 * @
	 */
	removeEvents() {
		this.raf.cancel(this.update);
		this.raf(this.update);
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
