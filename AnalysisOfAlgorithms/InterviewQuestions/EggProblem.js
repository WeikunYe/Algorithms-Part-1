const eggDrop = (K, N) => {
	const dp = Array.from({ length: K + 1 }, () =>
		Array.from(Array(N + 1), (x, i) => i)
	);
	dp[0] = Array(N + 1).fill(0);
	console.log(dp);

	for (let egg = 2; egg <= K; egg++) {
		for (let flr = 2; flr <= N; flr++) {
			let low = 1,
				high = flr,
				result = flr;
			let left, right, mid;

			while (low < high) {
				mid = low + Math.floor((high - low) / 2);
				left = dp[egg - 1][mid - 1]; // egg break
				right = dp[egg][flr - mid]; // egg doesn't break
				result = Math.min(result, 1 + Math.max(left, right));

				if (left === right) break;
				else if (left < right) low = mid + 1;
				else high = mid;
			}
			dp[egg][flr] = result;
		}
	}
	return dp[K][N];
};

console.log(eggDrop(2, 38));
