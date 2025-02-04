public class insertionSort{
    public static void insertionSort(int[] arr){
        int a = arr.length;
        for(int i = 1; i < a; ++i){
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && key < arr[j]) {
                arr[j + 1] = arr[j];
                --j;
                }
                arr[j + 1] = key;
                
    }
}
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 9};
        insertionSort(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
            }
    }
}