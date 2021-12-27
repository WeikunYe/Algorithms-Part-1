import { WeightedQuickUnionUF } from "../WeightedQuickUnion.js";

export class Percolation {
	#grid; // N*N grid
	#n;
	#uf;
	#numOpenSites;

	constructor(n) {
		this.#grid = new Array(n);

		for (let i = 0; i < n; i++) {
			this.#grid[i] = new Array(n).fill(false);
		}

		this.#n = n;

		const size = n * n + 2;

		this.#uf = new WeightedQuickUnionUF(size);

		for (let i = 1; i <= n; i++) {
			this.#uf.union(0, i);
			this.#uf.union(size - 1, n * n + 1 - i);
		}

		this.#numOpenSites = 0;
	}

	#validate(r, c) {
		if (r < 1 || c < 1 || r > this.#n || c > this.#n) return false;
		return true;
	}

	open(r, c) {
		if (!this.#validate(r, c)) {
			throw new Error("Out of range");
		}
		if (this.#grid[r - 1][c - 1]) return;

		this.#grid[r - 1][c - 1] = true;

		const neighbours = this.#neighbours(r, c);
		//console.log(neighbours);

		for (const neighbour of neighbours) {
			const [nR, nC] = neighbour;
			if (this.#grid[nR - 1][nC - 1] === true) {
				const rcIndex = this.#indexInUF(r, c);
				const neighbourIndex = this.#indexInUF(nR, nC);

				this.#uf.union(rcIndex, neighbourIndex);

				this.#numOpenSites += 1;
			}
		}
	}

	isOpen(r, c) {
		if (!this.#validate(r, c)) {
			throw new Error("Out of range");
		}

		return this.#grid[r - 1][c - 1];
	}

	isFull(r, c) {
		if (!this.#validate(r, c)) {
			throw new Error("Out of range");
		}

		const rcIndex = this.#indexInUF(r, c);

		return this.#grid[r - 1][c - 1] && this.#uf.connected(0, rcIndex);
	}

	numberOfOpenSites() {
		return this.#numOpenSites;
	}

	percolates() {
		if (this.#n === 1) return this.isOpen(1, 1);

		const size = this.#n * this.#n + 2;
		return this.#uf.connected(0, size - 1);
	}

	#neighbours(r, c) {
		const neighbours = [];
		const DIRS = [
			[-1, 0], // UP
			[+1, 0], // DOWN
			[0, -1], // LEFT
			[0, +1], // RIGHT
		];

		for (const dir of DIRS) {
			const neighbourR = dir[0] + r;
			const neighbourC = dir[1] + c;

			if (this.#validate(neighbourR, neighbourC)) {
				neighbours.push([neighbourR, neighbourC]);
			}
		}

		return neighbours;
	}

	#indexInUF(r, c) {
		return (r - 1) * this.#n + c;
	}
}
