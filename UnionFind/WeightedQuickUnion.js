export class WeightedQuickUnionUF {
	#data = [];
	#sz = [];
	#count = 0; // number of components
	constructor(n) {
		this.#count = n;
		for (let i = 0; i < n; i++) {
			this.#data[i] = i;
			this.#sz[i] = 1;
		}
	}

	count() {
		return this.#count;
	}

	#validate(i) {
		if (i < 0 || i >= this.#data.length) {
			throw new Error(`Index ${i} out of range`);
		}
	}

	root(i) {
		this.#validate(i);

		while (i !== this.#data[i]) {
			i = this.#data[i];
		}
		return i;
	}

	connected(p, q) {
		return this.root(p) === this.root(q);
	}

	union(p, q) {
		const rootP = this.root(p);
		const rootQ = this.root(q);

		if (rootP === rootQ) return;

		// Make smaller root point to large
		if (this.#sz[rootP] < this.#sz[rootQ]) {
			this.#data[rootP] = rootQ;
			this.#sz[rootQ] += this.#sz[rootP];
		} else {
			this.#data[rootQ] = rootP;
			this.#sz[rootP] += this.#sz[rootQ];
		}

		this.#count--;
	}
}
