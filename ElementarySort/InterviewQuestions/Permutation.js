/*
    Permutation:
    Given two integer arrays of size n, design a subquadratic algorithm to determine whether one is a permutation of the other. 
    That is, do they contain exactly the same entries but, possibly, in a different order.
*/

class Sort {
	static sort(arr) {
		// implement any sort algorithms
	}
}

class Permutation {
	static compare(a1, a2) {
		if (a1.length !== a2.length) return false;
		Sort.sort(a1);
		Sort.sort(a2);

		for (let i = 1; i < a1.length; i++) {
			if (a1[i] !== a2[i]) return false;
		}

		return true;
	}
}
