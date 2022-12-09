function fib(n: number, arr: number[] = []): number[] {
	if (n == 0) return [...arr];
	arr.push(arr[arr.length - 1] + arr[arr.length - 2] || 1);
	return [...fib(n - 1, arr)];
}

console.log("Hello World!");
