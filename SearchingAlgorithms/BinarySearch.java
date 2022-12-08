package SearchingAlgorithms;

public class BinarySearch {
	public static int search(int[] numArr, int target) {
		int left = 0, right = numArr.length, mid = (left + right) / 2;
		while (left < right) {
			if (numArr[mid] == target)
				return mid;

			if (numArr[mid] > target) {
				right = mid;
			} else {
				left = mid;
			}
			mid = (left + right) / 2;
		}
		return -1;
	}
}