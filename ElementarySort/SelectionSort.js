class SelectionSort {
	static sort(arr) {
		for (let i = 0; i < arr.length; i++) {
			let min = i;

			for (let j = i + 1; j < arr.length; j++) {
				if (this.#less(arr[j], arr[min])) min = j;
			}

			if (min !== i) this.#exch(arr, i, min);
		}
	}

	static #less(v, w) {
		if (v < w) return true;
		return false;
	}

	static #exch(arr, i, j) {
		const valueJ = arr[j];
		arr[j] = arr[i];
		arr[i] = valueJ;
	}
}

const input = [13, 6, -7, 12, 100, 33, -8, 0, 0, -8, -8];

SelectionSort.sort(input);

console.log(input);
