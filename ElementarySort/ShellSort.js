class ShellSort {
	static sort(arr) {
		const N = arr.length;

		let h = 1;

		while (h < N / 3) {
			h = 3 * h + 1;
		}

		while (h >= 1) {
			for (let i = h; i < N; i++) {
				for (
					let j = i;
					j >= h && this.#less(arr[j], arr[j - h]);
					j -= h
				) {
					this.#exch(arr, j, j - h);
				}
			}

			h = (h - 1) / 3;
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

const input = [
	13, 6, -7, 12, 100, 33, -8, 0, 0, -8, -8, 15, 23, 99, 75, 23, 75, 29,
];

ShellSort.sort(input);

console.log(input);
