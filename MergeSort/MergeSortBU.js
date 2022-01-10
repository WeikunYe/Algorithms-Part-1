class MergeSortBU {
	static #merge(a, aux, lo, mid, hi) {
		aux = [...a];

		let i = lo;
		let j = mid + 1;

		for (let k = lo; k <= hi; k++) {
			if (i > mid) a[k] = aux[j++];
			else if (j > hi) a[k] = aux[i++];
			else if (this.#less(aux[j], aux[i])) a[k] = aux[j++];
			else a[k] = aux[i++];
		}
	}

	static #less(p, q) {
		if (p < q) return true;
		return false;
	}

	static sort(a) {
		const N = a.length;
		const aux = [];

		for (let sz = 1; sz < N; sz = sz + sz) {
			for (let lo = 0; lo < N - sz; lo += sz + sz) {
				this.#merge(
					a,
					aux,
					lo,
					lo + sz - 1,
					Math.min(lo + sz + sz - 1, N - 1)
				);
			}
		}
	}
}

const input = [13, 6, -7, 12, 100, 33, -8, 0, 0, -8, -8];

const ms = MergeSortBU.sort(input);

console.log(input);
