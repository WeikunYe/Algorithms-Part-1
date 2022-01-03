class ArrayStack {
	#arr;

	constructor() {
		this.#arr = [];
	}

	isEmpty() {
		return this.#arr.length === 0;
	}

	push(item) {
		this.#arr.push(item);
	}

	pop() {
		return this.#arr.pop();
	}
}
