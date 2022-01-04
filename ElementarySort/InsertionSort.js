class InsertionSort {
	static sort(arr) {
		const length = arr.length;

		for (let i = 0; i < length; i++) {
			for (let j = i; j > 0; j--) {
				if (this.#less(arr[j], arr[j - 1])) {
					this.#exch(arr, j, j - 1);
				} else {
					break;
				}
			}
		}
	}

	static #less(v, w) {
		if (v < w) return true;
		return false;
	}

	static #exch(arr, i, j) {
		const jValue = arr[j];
		arr[j] = arr[i];
		arr[i] = jValue;
	}
}

const input = [13, 6, -7, 12, 100, 33, -8, 0, 0, -8, -8];

InsertionSort.sort(input);

console.log(input);
