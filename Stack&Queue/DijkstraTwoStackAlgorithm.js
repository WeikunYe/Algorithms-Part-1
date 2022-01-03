/*
    Arithmetic expression evaluation
*/

const evaluation = (expression) => {
	const OPERATOR = new Set(["+", "-", "*", "/"]);

	const expArr = expression.split(" ");

	const numStack = [];

	const optStack = [];

	for (const ele of expArr) {
		if (ele === "(") continue;

		if (OPERATOR.has(ele)) {
			optStack.push(ele);
			continue;
		}

		if (ele === ")") {
			const value1 = numStack.pop();
			const value2 = numStack.pop();
			const opt = optStack.pop();

			const result = cal(value1, value2, opt);

			numStack.push(result);
			continue;
		}

		numStack.push(ele);
	}

	return numStack.pop();
};

const cal = (v1, v2, opt) => {
	let result;
	v1 = parseFloat(v1);
	v2 = parseFloat(v2);

	switch (opt) {
		case "+":
			result = v1 + v2;
			break;
		case "-":
			result = v1 - v2;
			break;
		case "*":
			result = v1 * v2;
			break;
		case "/":
			result = v1 / v2;
			break;
	}

	return result;
};

const input = "( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )";

console.log(evaluation(input));
