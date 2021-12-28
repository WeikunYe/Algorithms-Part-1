export class BinarySearch {
	#arr;

	constructor(arr) {
		this.#arr = [...arr];
	}

	// O(logN)
	search(key) {
		let lo = 0;
		let hi = this.#arr.length - 1;

		while (lo <= hi) {
			const mid = parseInt(lo + (hi - lo) / 2);

			if (key < this.#arr[mid]) {
				hi = mid - 1;
			} else if (key > this.#arr[mid]) {
				lo = mid + 1;
			} else {
				return mid;
			}
		}

		return -1;
	}
}

/* const bs = new BinarySearch([
	6, 13, 14, 25, 33, 43, 51, 53, 64, 72, 84, 93, 95, 96, 97,
]);

console.log(bs.search(33)); */
