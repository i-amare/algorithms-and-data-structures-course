package SearchingAlgorithms;

public class StringSearch {
	/**
	 * Returns the number of times a substring is found within a string
	 * 
	 * @param str    The string to be searched
	 * @param subStr The substring
	 */
	public static int search(String str, String subStr) {
		int numMatches = 0;
		for (int i = 0; i <= str.length() - subStr.length(); i++) {
			String s = str.substring(i, i + subStr.length());
			if (s.equals(subStr)) {
				numMatches++;
			}
		}
		return numMatches;
	}

	public static void main(String[] args) {
		System.out.println(search("abcabcabcabdabc", "abc"));		
	}
}