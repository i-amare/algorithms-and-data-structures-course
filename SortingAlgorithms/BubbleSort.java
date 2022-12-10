package SortingAlgorithms;

import java.util.Arrays;

public class BubbleSort {
	public static int[] sort(int[] arr) {
		for (int i = arr.length; i > 0; i--) {
			for (int j = 0; j < i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
		return arr;
	}	

	public static void main(String[] args) {
		System.out.println(Arrays.toString(sort(new int[]{1, 4, 3, 2, 5, 6})));
	}
}
