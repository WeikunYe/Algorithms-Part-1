class ShaffleSort {
	static sort(arr) {
		const N = arr.length;

		for (let i = 0; i < N; i++) {
			// between 0 ~ i
			// between 0 ~ N is not uniformly at random
			const random = this.#random(0, i);

			this.#exch(arr, i, random);
		}
	}
	static #exch(arr, i, j) {
		const jValue = arr[j];
		arr[j] = arr[i];
		arr[i] = jValue;
	}

	static #random(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
}

const input = [13, 6, -7, 12, 100, 33, -8, 0, 0, -8, -8];

ShaffleSort.sort(input);

console.log(input);
