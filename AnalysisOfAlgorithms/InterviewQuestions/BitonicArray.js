/*
    Search in a bitonic array：
    An array is bitonic if it is comprised of an increasing sequence of integers followed immediately by a decreasing sequence of integers. 
    Write a program that, given a bitonic array of n distinct integer values, determines whether a given integer is in the array.

    Standard version: Use 3lgn compares in the worst case.

    Signing bonus: Use 2lgn compares in the worst case (and prove that no algorithm can guarantee to perform fewer than 2lgn compares in the worst case).
*/

class BitonicArray {
	#arr = [];

	constructor(arr) {
		this.#arr = [...arr];
	}

	#bitonicPoint(lo = 0, hi = this.#arr.length) {
		if (lo === hi) return lo;

		let mid = Math.floor((lo + hi) / 2);

		if (this.#arr[mid] > this.#arr[mid + 1])
			return this.#bitonicPoint(lo, mid);

		return this.#bitonicPoint(mid + 1, hi);
	}

	#ascendingBinarySearch(lo, hi, value) {
		while (lo <= hi) {
			const mid = Math.floor(lo + (hi - lo) / 2);

			if (this.#arr[mid] === value) return mid;

			if (this.#arr[mid] > value) hi = mid - 1;

			if (this.#arr[mid] < value) lo = mid + 1;
		}

		return -1;
	}

	#descendingBinarySearch(lo, hi, value) {
		while (lo <= hi) {
			const mid = Math.floor(lo + (hi - lo) / 2);

			if (this.#arr[mid] === value) return mid;

			if (this.#arr[mid] < value) hi = mid - 1;

			if (this.#arr[mid] > value) lo = mid + 1;
		}

		return -1;
	}

	search(value) {
		const bitonicPoint = this.#bitonicPoint();

		if (value > this.#arr[bitonicPoint]) {
			return -1;
		} else if (value === this.#arr[bitonicPoint]) {
			return bitonicPoint;
		} else {
			const ascResult = this.#ascendingBinarySearch(
				0,
				bitonicPoint - 1,
				value
			);

			if (ascResult !== -1) return ascResult;

			const desResult = this.#descendingBinarySearch(
				bitonicPoint + 1,
				this.#arr.length - 1,
				value
			);

			if (desResult !== -1) return desResult;
		}

		return -1;
	}
}

const ba = new BitonicArray([-3, 9, 18, 19, 20, 17, 5, 1]);

console.log(ba.search(5));
