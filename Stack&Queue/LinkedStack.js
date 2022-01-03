class Node {
	constructor(item) {
		this.item = item;
		this.next = null;
	}
}

class LinkedStack {
	#first;

	constructor() {
		this.#first = null;
	}

	isEmpty() {
		return this.#first === null;
	}

	push(item) {
		const oldFirst = this.#first;

		const first = new Node(item);

		first.next = oldFirst;

		this.#first = first;
	}

	pop() {
		const item = this.#first.item;

		this.#first = this.#first.next;

		return item;
	}
}
