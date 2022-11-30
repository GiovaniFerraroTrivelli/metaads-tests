function removeNb(n) {
	const sum = n * (n + 1) / 2;
	const result = [];
	for (let i = 1; i <= n; i++) {
		const j = (sum - i) / (i + 1);
		if (j <= n && j % 1 === 0) {
			result.push([i, j]);
		}
	}
	return result;
}

module.exports = removeNb;
