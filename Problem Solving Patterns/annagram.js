function validAnagram(str1, str2) {
	// Return false if strings are of a different length
	if (str1.length !== str2.length) {
		return false;
	}

	// Create a object that will store the chars in str2 and the frequency that they appear
	let freqCounter = {};

	// Loop through chars in in str2
	for (char of str2) {
		// For each char, add it to the object it is not already there, increment its frequency if it is
		freqCounter[char] = (freqCounter[char] || 0) + 1;
	}
		
	// Loop through chars in str1
	for (char of str1) {
		// If the char IS is in freqCounter AND value is greater than 0, decrement its frequency
		if (freqCounter[char]) {
			freqCounter[char] -= 1;
			continue;
		}
		// Else return false
		return false;
	}

	// Return true
	return true;
}

console.log(validAnagram('mmm', 'qertwy'));