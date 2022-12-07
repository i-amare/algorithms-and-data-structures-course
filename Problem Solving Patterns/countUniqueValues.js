function countUniqueValues(arr) {
	// Create an Object that will store all unique values within the array
	const values = {};

	// Loop through array; If value is NOT in Object, add it
	for (i of arr) {
		values[i] = (values[i] || 0) + 1;
	}

	// Return the number of properties is the object
	return Object.keys(values).length;
}

console.log(countUniqueValues([]));