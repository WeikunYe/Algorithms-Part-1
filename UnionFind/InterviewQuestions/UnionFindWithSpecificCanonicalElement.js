/*
    Union-find with specific canonical element:
    Add a method find() to the union-find data type so that find(i) returns the largest element in the connected component containing i.
    The operations, find(), connected(), union() should all take logarithmic time or better.

    For example, if one of the connected components is {1, 2, 6, 9}, 
    then the find() method should return 9 for each of the four elements in the connected components.
*/

export class UFWithFindLargest {
	#data = [];
	#sz = [];
	#count = 0;
	#large = [];
	constructor(n) {
		this.#count = n;
		for (let i = 0; i < n; i++) {
			this.#data[i] = i;
			this.#large[i] = i;
			this.#sz[i] = 1;
		}
	}

	#inbound(i) {
		if (i < 0 || i >= this.#count) {
			throw new Error(`Index ${i} out of range`);
		}
	}

	#root(i) {
		this.#inbound(i);

		while (i !== this.#data[i]) {
			i = this.#data[i];
		}
		return i;
	}

	connected(p, q) {
		return this.#root(p) === this.#root(q);
	}

	union(p, q) {
		const rootP = this.#root(p);
		const rootQ = this.#root(q);

		if (rootP === rootQ) return;

		const largestP = this.#large[p];
		const largestQ = this.#large[q];

		if (this.#sz[rootP] < this.#sz[rootQ]) {
			this.#data[rootP] = rootQ;
			this.#sz[rootQ] += this.#sz[rootP];

			if (largestP > largestQ) this.#large[rootQ] = largestP;
		} else {
			this.#data[rootQ] = rootP;
			this.#sz[rootP] += this.#sz[rootQ];
			if (largestQ > largestP) this.#large[rootP] = largestQ;
		}
	}

	find(i) {
		return this.#large[this.#root(i)];
	}
}

const input = {
	number: 10,
	unions: [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[5, 6],
		[6, 7],
		[7, 8],
	],
};

const findLargest = (input, i) => {
	const ufwfl = new UFWithFindLargest(input.number);

	for (const u of input.unions) {
		ufwfl.union(u[0], u[1]);
	}

	return ufwfl.find(i);
};

console.log(findLargest(input, 3)); // 4
console.log(findLargest(input, 4)); // 4

console.log(findLargest(input, 7)); // 8
console.log(findLargest(input, 5)); // 8

console.log(findLargest(input, 9)); // 9
