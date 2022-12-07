function same(arr1 = [], arr2 = []) {
	// Return false if the arrays do not have the same number of values
	if (arr1.length != arr2.length) {
		return false;
	}
	// Create an object that will hold all the values of the sqrd arr and the frequency those number show up
	let values = {};

	// Loop through 2nd array
	for (num of arr2) {
		// If the number is already in object, increment its value, Else add it to the object and set its value to 1
		values[num] = (values[num] || 0) + 1;
	}

	// Loop through each num in first array
	for (num of arr1) {
		let numSqrd = num ** 2;
		// If num^2 IS NOT found in object OR its value is 0, return false; else decrement its frequency
		if (!values.hasOwnProperty(numSqrd) || !values[numSqrd]) {
			return false;
		}
		values[numSqrd] = values[numSqrd] - 1;
	}
	
	// Return true
	return true;
}

console.log(same([3, 2, 3], [9, 4, 4]));
