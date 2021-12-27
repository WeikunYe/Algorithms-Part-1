class QuickUnionUF {
	#data = [];
	#count = 0;
	constructor(n) {
		for (let i = 0; i < n; i++) {
			this.#data[i] = i;
		}

		this.#count = n;
	}

	count() {
		return this.#count;
	}

	#validate(i) {
		if (i < 0 || i >= this.#data.length) {
			throw new Error("Index out of range");
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

		this.#data[rootP] = rootQ;
		this.#count--;
	}
}
