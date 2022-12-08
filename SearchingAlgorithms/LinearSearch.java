package SearchingAlgorithms;

public class LinearSearch {
	public static int indexOf(String[] arr, String strIn) {
		for (int i = 0; i < arr.length; i++) {
			String str = arr[i];
			if (str.equals(strIn))
				return i;
		}
		return -1;
	}

	public static int indexOf(int[] arr, int numIn) {
		for (int i = 0; i < arr.length; i++) {
			int num = arr[i];
			if (num == numIn)
				return i;
		}
		return -1;
	}
}