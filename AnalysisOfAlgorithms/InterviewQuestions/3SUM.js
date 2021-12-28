/*
	3-SUM in quadratic time:
	Design an algorithm for the 3-SUM problem that takes time proportional to n^2 in the worst case. 
	You may assume that you can sort the n integers in time proportional to n^2 or better.
*/

import { BinarySearch } from "../BinarySearch.js";

class ThreeSum {
	#ints = [];

	constructor(arr) {
		this.#ints = [...arr];
	}

	countBruteForce() {
		const length = this.#ints.length;
		let count = 0;

		for (let i = 0; i < length; i++) {
			for (let j = i + 1; j < length; j++) {
				for (let k = j + 1; k < length; k++) {
					if (this.#ints[i] + this.#ints[j] + this.#ints[k] === 0) {
						count++;
					}
				}
			}
		}

		return count;
	}

	// Optimized with Binary Search
	countOptimized() {
		const sortedArr = this.#ints.sort((a, b) => a - b);
		const length = sortedArr.length;
		let count = 0;

		for (let i = 0; i < length; i++) {
			for (let j = i + 1; j < length; j++) {
				const thirdInt = 0 - (sortedArr[i] + sortedArr[j]);

				const bs = new BinarySearch(sortedArr);

				const bsResult = bs.search(thirdInt);

				if (
					bsResult !== -1 &&
					sortedArr[bsResult] !== sortedArr[i] &&
					sortedArr[bsResult] !== sortedArr[j]
				) {
					console.log(
						sortedArr[i] +
							" " +
							sortedArr[j] +
							" " +
							sortedArr[bsResult]
					);
					count++;
				}
			}
		}

		return count / 3;
	}
}

const ts = new ThreeSum([-1, 1, 0, -2, 2, -3, 3, 7, 9, 10]);

console.log(ts.countOptimized());
