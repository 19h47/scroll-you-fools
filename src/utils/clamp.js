/**
 * clamp
 *
 * @param  int value
 * @param  int min
 * @param  int max
 *
 * @return int
 */
export default function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}
