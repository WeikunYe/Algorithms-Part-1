export class QuickFindUF {
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

	find(p) {
		this.#validate(p);
		return this.#data[p];
	}

	#validate(i) {
		if (i < 0 || i >= this.#data.length) {
			throw new Error(
				`Index ${i} out of range ( 0 - ${this.#data.length})`
			);
		}
	}

	connected(p, q) {
		this.#validate(p);
		this.#validate(q);

		return this.#data[p] === this.#data[q];
	}

	union(p, q) {
		this.#validate(p);
		this.#validate(q);

		const pid = this.#data[p];
		const qid = this.#data[q];

		if (pid === qid) return;

		for (let i = 0; i < this.#data.length; i++) {
			if (this.#data[i] === pid) this.#data[i] = qid;
		}

		this.#count--;
	}
}
