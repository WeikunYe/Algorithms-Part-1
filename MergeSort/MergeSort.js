class MergeSort {
	static #merge(a, aux, lo, mid, hi) {
		for (let i = 0; i < hi; i++) {
			aux[i] = a[i];
		}

		let i = lo;
		let j = mid + 1;

		for (let k = lo; k <= hi; k++) {
			if (i > mid) a[k] = aux[j++];
			else if (j > hi) a[k] = aux[i++];
			else if (this.#less(aux[j], aux[i])) a[k] = aux[j++];
			else a[k] = aux[i++];
		}
	}

	static #sort(a, aux, lo, hi) {
		if (hi <= lo) return;

		const mid = lo + Math.floor((hi - lo) / 2);

		this.#sort(a, aux, lo, mid);
		this.#sort(a, aux, mid + 1, hi);
		this.#merge(a, aux, lo, mid, hi);
	}

	static sort(a) {
		const aux = [...a];
		this.#sort(a, aux, 0, a.length - 1);
	}

	static #less(p, q) {
		if (p < q) return true;
		return false;
	}
}

const input = [13, 6, -7, 12, 100, 33, -8, 0, 0, -8, -8];

const ms = MergeSort.sort(input);

console.log(input);
