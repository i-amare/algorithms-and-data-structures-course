function sumZero(arr) {
	// Loop through 'i' in array
	for (i in arr) {
		// Calculate the number needed to sum up to 0, call the variable sum
		let sum = -arr[i];

		// If 'sum' in arr, return [i, sum]
		let begin = i,
			end = arr.length - 1,
			pointer = 0;

		for (let j = 0; j < arr.length / 2; j++) {
			if (arr[pointer] === sum) {
				// Return values
				return [arr[i], sum];
			}
			sum > arr[pointer] ? (begin = pointer) : (end = pointer);
			pointer = Math.round((end + begin) / 2);
		}
		continue;
		
	}
	return undefined;
}

console.log(sumZero([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 12]));
