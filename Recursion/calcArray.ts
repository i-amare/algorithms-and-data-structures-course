function sumArray(arr: number[]): number {
	if (arr.length == 1) return arr[0];
	return arr[0] + sumArray(arr.slice(1));
}

function productOfArray(arr: number[]): number {
	if (arr.length == 1) return arr[0];
	return arr[0] * productOfArray(arr.slice(1));
}
