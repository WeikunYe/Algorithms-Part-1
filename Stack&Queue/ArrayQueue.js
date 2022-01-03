class ArrayQueue {
	#items;
	constructor() {
		this.#items = [];
	}

	enqueue(item) {
		this.#items.push(item);
	}

	dequeue() {
		return this.#items.shift();
	}
}
