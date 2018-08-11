# Reverse scroll

Two columns, one scroll.

![Reverse scroll](screenshot.jpg)

ReverseScroll reverses scroll for two columns.

## Installation

```
npm install reverse-scroll
```

## Usage

### JavaScript

```javascript
const container = document.getElementsByClassName('js-container');
const options = {};
const hs = new ReverseScroll(container, options);
```

### CSS

```css
// Utilities
.h-xs-100 {
	height: 100%;
}

.reverse-scroll {
	height: 100vh;
}

.reverse-scroll__columns {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.reverse-scroll__row {
	position: absolute;
	right: 0;
	left: 0;
	margin-right: 15px;
	margin-left: 15px;
}

.reverse-scroll__row--left {
	top: 100%;
	transform: translate3d( 0, 100%, 0 );
}

.lookbook__row--right {
	bottom: 100%;
	transform: translate3d( 0, -100%, 0 );
}

.reverse-scroll__column {
	padding-top: 12vh;
	padding-bottom: 12vh;

	align-items: center;
	height: 100vh;
}

.reverse-scroll__image {
	height: 100%;
	width: 100%;

	max-width: 100%;

	object-position: center;
}
```

### HTML

```html
<div class="reverse-scroll">
	<div class="reverse-scroll__columns js-container">
		<div class="row h-xs-100">
			<div class="col-5 offset-1 h-xs-100">
				<div class="reverse-scroll__row reverse-scroll__row--left js-row-left">
					<div class="reverse-scroll__column">
						<img
							class="reverse-scroll__image"
							src="https://picsum.photos/528/348"
							width="528"
							height="348"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-5 h-xs-100">
				<div class="reverse-scroll__row reverse-scroll__row--right js-row-right">
					<div class="reverse-scroll__column">
						<img
							class="reverse-scroll__image"
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

## Authors

Thanks to [Corentin Fardeau](https://github.com/Corentinfardeau/horizontal-scroll), so inspiring

## Acknowledgments

[ ] Remove [Bootstrap](https://getbootstrap.com/) dependency
