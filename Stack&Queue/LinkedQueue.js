class Node {
	constructor(item) {
		this.item = item;
		this.next = null;
	}
}

class LinkedQueue {
	#first;
	#last;

	constructor() {
		this.#first = null;
		this.#last = null;
	}

	isEmpty() {
		return this.#first === null;
	}

	enqueue(item) {
		const last = new Node(item);

		if (this.#first === null) {
			this.#first = last;
			this.#last = last;
		} else {
			const oldLast = this.#last;
			oldLast.next = last;
			this.#last = last;
		}
	}

	dequeue() {
		if (this.#first === null) return;

		const firstItem = this.#first.item;
		this.#first = this.#first.next;

		if (this.#first === null) this.#last === null;

		return firstItem;
	}
}
