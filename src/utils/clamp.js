/**
 * clamp
 *
 * @param  int value
 * @param  int min
 * @param  int max
 *
 * @return int
 */
export default function (value, min, max) {
	return Math.min(Math.max(value, min), max);
}
