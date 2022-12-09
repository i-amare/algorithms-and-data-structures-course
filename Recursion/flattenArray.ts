function flatten(arr: Array<any>): Array<any> {
	if (arr.length == 0) return arr;
	if (Array.isArray(arr[0]))
		return [...flatten(arr[0]), ...flatten(arr.slice(1))];
	return [arr[0], ...flatten(arr.slice(1))];
}