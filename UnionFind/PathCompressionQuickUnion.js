class PathCompressionQuickUnion {
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
			this.#data[i] = this.#data[this.#data[i]];
			i = this.#data[i];
		}

		return i;
	}

	connected(p, q) {
		return this.root(p) === this.root(q);
	}

	union(p, q) {
		const pRoot = this.root(p);
		const qRoot = this.root(q);

		if (pRoot === qRoot) return;

		this.#data[pRoot] = qRoot;

		this.#count--;
	}
}
