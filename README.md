# Scroll, you fools

> Scrollez, pauvres fous

Two columns, one scroll.

![Scroll, you fools](screenshot.jpg)

Reverses scroll for two columns.

## Installation

```
npm install scroll-you-fools
```

## Usage

### JavaScript

```javascript
const container = document.getElementsByClassName('js-container')[0];
const options = {};
const scrollYouFools = new ScrollYouFools.default(container, options);
```

### CSS

```css

body {
	overflow: hidden;
}

// Utilities
.h-xs-100 {
	height: 100%;
}

.scroll-you-fools {
	position: relative;
	height: 100vh;
}

.scroll-you-fools__columns {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.scroll-you-fools__row {
	position: absolute;
	right: 0;
	left: 0;
	margin-right: 15px;
	margin-left: 15px;
}

.scroll-you-fools__row--left {
	top: 100%;
	transform: translate3d( 0, 100%, 0 );
}

.scroll-you-fools__row--right {
	bottom: 100%;
	transform: translate3d( 0, -100%, 0 );
}

.scroll-you-fools__column {
	padding-top: 12vh;
	padding-bottom: 12vh;

	align-items: center;
	height: 100vh;
}

.scroll-you-fools__image {
	height: 100%;
	width: 100%;

	max-width: 100%;

	object-position: center;
}

```

### HTML

```html

<div class="scroll-you-fools">
	<div class="scroll-you-fools__columns js-container container-fluid">
		<div class="row h-xs-100">
			<div class="col-5 offset-1 h-xs-100">
				<div class="scroll-you-fools__row scroll-you-fools__row--left js-row-left">
					<div class="scroll-you-fools__column">
						<img
							class="scroll-you-fools__image"
							src="https://picsum.photos/528/348"
							width="528"
							height="348"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-5 h-xs-100">
				<div class="scroll-you-fools__row scroll-you-fools__row--right js-row-right">
					<div class="scroll-you-fools__column">
						<img
							class="scroll-you-fools__image"
							src="https://picsum.photos/528/348"
							width="528"
							height="348"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```

## Options

## Example

An example is located right [here](https://19h47.github.io/scroll-you-fools/), see [sources](/example/index.html).

## Authors

## Acknowledgments

- [Corentin Fardeau](https://github.com/Corentinfardeau/horizontal-scroll), so inspiring

## To do

- [ ] Remove [Bootstrap](https://getbootstrap.com/) dependency
