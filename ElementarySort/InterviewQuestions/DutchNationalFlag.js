/*
    Leetcode 75 Sort Colors: https://leetcode.com/problems/sort-colors/

    One Pass Algorithms
*/

var sortColors = function (arr) {
	let low = 0,
		mid = 0,
		high = arr.length - 1;

	while (mid <= high) {
		if (arr[mid] == 0) {
			swap(low, mid);
			mid++;
			low++;
		} else if (arr[mid] == 1) {
			mid++;
		} else if (arr[mid] == 2) {
			swap(mid, high);
			high--;
		}
	}

	function swap(a, b) {
		[arr[b], arr[a]] = [arr[a], arr[b]];
	}
};
