// CLX: A data library for sorting arrays using algorithms
// This is done by using simple functions, which can be used by simply calling them
// The functions are:
// 1. bubbleSort()
// 2. selectionSort()
// 3. insertionSort()
// 4. mergeSort()
// 5. quickSort()
// 6. heapSort()
// 7. countingSort()
// 8. radixSort()
// 9. bucketSort()
// 10. shellSort()
// 11. cocktailSort()
// 12. combSort()
// 13. gnomeSort()
// 14. cycleSort()
// 15. stoogeSort()
// 16. bitonicSort()
// 17. pancakeSort()
// 18. bogoSort()
// 19. sleepSort()
// 20. strandSort()

// 1. Bubble Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// 2. Selection Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: No
// In-Place: Yes
// Description: Selection sort is a simple sorting algorithm that repeatedly finds the minimum element from the unsorted part and puts it at the beginning. The algorithm maintains two subarrays in a given array.

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i+1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// 3. Insertion Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

// 4. Merge Sort
// Time Complexity: O(n log(n))
// Space Complexity: O(n)
// Stable: Yes
// In-Place: No
// Description: Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.

function mergeSort(arr) {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let mid = Math.floor(len/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// 5. Quick Sort
// Time Complexity: O(n log(n))
// Space Complexity: O(log(n))
// Stable: No
// In-Place: Yes
// Description: Quicksort is an efficient sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

function quickSort(arr, left, right) {
    let len = arr.length;
    let index;
    if (len > 1) {
        index = partition(arr, left, right);
        if (left < index-1) {
            quickSort(arr, left, index-1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left+right)/2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

// 6. Heap Sort
// Time Complexity: O(n log(n))
// Space Complexity: O(1)
// Stable: No
// In-Place: Yes
// Description: Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region.

function heapSort(arr) {
    let len = arr.length;
    for (let i = Math.floor(len/2)-1; i >= 0; i--) {
        heapify(arr, len, i);
    }
    for (let i = len-1; i >= 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, len, i) {
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, len, largest);
    }
}

// 7. Counting Sort
// Time Complexity: O(n+k)
// Space Complexity: O(n+k)
// Stable: Yes
// In-Place: No
// Description: Counting sort is an algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence.

function countingSort(arr) {
    let len = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let count = new Array(max-min+1).fill(0);
    let z = 0;
    for (let i = 0; i < len; i++) {
        count[arr[i]-min]++;
    }
    for (let i = min; i <= max; i++) {
        while (count[i-min]-- > 0) {
            arr[z++] = i;
        }
    }
    return arr;
}

// 8. Radix Sort
// Time Complexity: O(nk)
// Space Complexity: O(n+k)
// Stable: Yes
// In-Place: No
// Description: Radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix. For elements with more than one significant digit, this bucketing process is repeated for each digit, while preserving the ordering of the prior step, until all digits have been considered.

function radixSort(arr) {
    let len = arr.length;
    let max = Math.max(...arr);
    for (let exp = 1; Math.floor(max/exp) > 0; exp *= 10) {
        countSort(arr, len, exp);
    }
    return arr;
}

function countSort(arr, len, exp) {
    let output = new Array(len).fill(0);
    let count = new Array(10).fill(0);
    for (let i = 0; i < len; i++) {
        count[Math.floor(arr[i]/exp)%10]++;
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i-1];
    }
    for (let i = len-1; i >= 0; i--) {
        output[count[Math.floor(arr[i]/exp)%10]-1] = arr[i];
        count[Math.floor(arr[i]/exp)%10]--;
    }
    for (let i = 0; i < len; i++) {
        arr[i] = output[i];
    }
}

// 9. Bucket Sort
// Time Complexity: O(n+k)
// Space Complexity: O(n+k)
// Stable: Yes
// In-Place: No
// Description: Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.

function bucketSort(arr) {
    let len = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let bucket = new Array(max-min+1).fill(0);
    let z = 0;
    for (let i = 0; i < len; i++) {
        bucket[arr[i]-min]++;
    }
    for (let i = min; i <= max; i++) {
        while (bucket[i-min]-- > 0) {
            arr[z++] = i;
        }
    }
    return arr;
}

// 10. Shell Sort
// Time Complexity: O(n log(n))
// Space Complexity: O(1)
// Stable: No
// In-Place: Yes
// Description: Shellsort is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange or sorting by insertion. The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared.

function shellSort(arr) {
    let len = arr.length;
    for (let gap = Math.floor(len/2); gap > 0; gap = Math.floor(gap/2)) {
        for (let i = gap; i < len; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j-gap] > temp; j -= gap) {
                arr[j] = arr[j-gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
}

// 11. Cocktail Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Cocktail shaker sort, also known as bidirectional bubble sort, cocktail sort, shaker sort, ripple sort, shuffle sort, or shuttle sort, is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort.

function cocktailSort(arr) {
    let len = arr.length;
    let swapped = true;
    let start = 0;
    let end = len-1;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
        swapped = false;
        end--;
        for (let i = end-1; i >= start; i--) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
        start++;
    }
    return arr;
}

// 12. Comb Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: No
// In-Place: Yes
// Description: Comb sort is a relatively simple sorting algorithm originally designed by Włodzimierz Dobosiewicz in 1980. Later it was rediscovered by Stephen Lacey and Richard Box in 1991. Comb sort improves on bubble sort.

function combSort(arr) {
    let len = arr.length;
    let gap = len;
    let swapped = true;
    while (gap != 1 || swapped == true) {
        gap = getNextGap(gap);
        swapped = false;
        for (let i = 0; i < len-gap; i++) {
            if (arr[i] > arr[i+gap]) {
                let temp = arr[i];
                arr[i] = arr[i+gap];
                arr[i+gap] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}

function getNextGap(gap) {
    gap = Math.floor((gap*10)/13);
    if (gap < 1) {
        return 1;
    }
    return gap;
}

// 13. Gnome Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Gnome sort is a sorting algorithm originally proposed by Iranian computer scientist Hamid Sarbazi-Azad in 2000. The sort was first called stupid sort and then later gnome sort. The algorithm always finds the first place where two adjacent elements are in the wrong order, and swaps them.

function gnomeSort(arr) {
    let len = arr.length;
    let index = 0;
    while (index < len) {
        if (index == 0) {
            index++;
        }
        if (arr[index] >= arr[index-1]) {
            index++;
        } else {
            let temp = arr[index];
            arr[index] = arr[index-1];
            arr[index-1] = temp;
            index--;
        }
    }
    return arr;
}

// 14. Cycle Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Cycle sort is an in-place, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array, unlike any other in-place sorting algorithm. It is based on the idea that the permutation to be sorted can be factored into cycles, which can individually be rotated to give a sorted result.

function cycleSort(arr) {
    let len = arr.length;
    for (let cycleStart = 0; cycleStart < len-1; cycleStart++) {
        let item = arr[cycleStart];
        let pos = cycleStart;
        for (let i = cycleStart+1; i < len; i++) {
            if (arr[i] < item) {
                pos++;
            }
        }
        if (pos == cycleStart) {
            continue;
        }
        while (item == arr[pos]) {
            pos++;
        }
        let temp = arr[pos];
        arr[pos] = item;
        item = temp;
        while (pos != cycleStart) {
            pos = cycleStart;
            for (let i = cycleStart+1; i < len; i++) {
                if (arr[i] < item) {
                    pos++;
                }
            }
            while (item == arr[pos]) {
                pos++;
            }
            temp = arr[pos];
            arr[pos] = item;
            item = temp;
        }
    }
    return arr;
}

// 15. Stooge Sort
// Time Complexity: O(n^2.71)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Stooge sort is a recursive sorting algorithm with a time complexity of O(n(log3/log1.5)) = O(n^2.7095...). The running time of the algorithm is thus extremely slow compared to efficient sorting algorithms, such as merge sort, heapsort, or quicksort.

function stoogeSort(arr, l, h) {
    if (l >= h) {
        return;
    }
    if (arr[l] > arr[h]) {
        let temp = arr[l];
        arr[l] = arr[h];
        arr[h] = temp;
    }
    if (h-l+1 > 2) {
        let t = Math.floor((h-l+1)/3);
        stoogeSort(arr, l, h-t);
        stoogeSort(arr, l+t, h);
        stoogeSort(arr, l, h-t);
    }
    return arr;
}

// 16. Bitonic Sort
// Time Complexity: O(n log(n)^2)
// Space Complexity: O(log(n))
// Stable: No
// In-Place: Yes
// Description: Bitonic sort is a comparison-based sorting algorithm that can be run in parallel. It focuses on converting a random sequence of numbers into a bitonic sequence, one that monotonically increases, then decreases. Rotations of a bitonic sequence are also bitonic.

function bitonicSort(arr, up) {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let mid = Math.floor(len/2);
    bitonicSort(arr.slice(0, mid), 1);
    bitonicSort(arr.slice(mid), 0);
    bitonicMerge(arr, up);
    return arr;
}

function bitonicMerge(arr, up) {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let mid = Math.floor(len/2);
    for (let i = 0; i < mid; i++) {
        if ((arr[i] > arr[mid+i]) == up) {
            let temp = arr[i];
            arr[i] = arr[mid+i];
            arr[mid+i] = temp;
        }
    }
    bitonicMerge(arr.slice(0, mid), up);
    bitonicMerge(arr.slice(mid), up);
}

// 17. Pancake Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Pancake sorting is the colloquial term for the mathematical problem of sorting a disordered stack of pancakes in order of size when a spatula can be inserted at any point in the stack and used to flip all pancakes above it. A pancake number is the minimum number of flips required for a given number of pancakes.

function pancakeSort(arr) {
    let len = arr.length;
    for (let i = len-1; i > 0; i--) {
        let max = getMax(arr, i);
        if (max != i) {
            flip(arr, max);
            flip(arr, i);
        }
    }
    return arr;
}

function getMax(arr, n) {
    let max = 0;
    for (let i = 0; i <= n; i++) {
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
    return max;
}

function flip(arr, n) {
    let start = 0;
    while (start < n) {
        let temp = arr[start];
        arr[start] = arr[n];
        arr[n] = temp;
        start++;
        n--;
    }
}

// 18. Bogo Sort
// Time Complexity: O(n*n!)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Bogo sort also known as permutation sort, stupid sort, slowsort, shotgun sort or monkey sort is a particularly ineffective algorithm based on generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted.

function bogoSort(arr) {
    let len = arr.length;
    while (!isSorted(arr)) {
        shuffle(arr);
    }
    return arr;
}

function isSorted(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        if (arr[i-1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function shuffle(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let r = Math.floor(Math.random()*(i+1));
        let temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
    }
}

// 19. Sleep Sort
// Time Complexity: O(n)
// Space Complexity: O(1)
// Stable: Yes
// In-Place: Yes
// Description: Sleep sort is a sorting algorithm that works by scheduling the sorting of each element of an array at specific time intervals by sleeping for a period of time proportional to the element's value.

function sleepSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        setTimeout(function() {
            console.log(arr[i]);
        }, arr[i]);
    }
}

// 20. Strand Sort
// Time Complexity: O(n^2)
// Space Complexity: O(n)
// Stable: Yes
// In-Place: No
// Description: Strand sort is a sorting algorithm. It starts by scanning the list for the largest value, and moving that to a new list. It then scans the remaining values, moving the next largest of those values into the new list. It continues doing this until the original list is empty.

function strandSort(arr) {
    let len = arr.length;
    let result = [];
    while (len > 0) {
        let temp = [];
        let index = 0;
        temp.push(arr[index]);
        arr.splice(index, 1);
        len--;
        for (let i = 0; i < len; i++) {
            if (arr[i] > temp[temp.length-1]) {
                temp.push(arr[i]);
                arr.splice(i, 1);
                len--;
                i--;
            }
        }
        result = mergeStrand(result, temp);
    }
    return result;
}

function mergeStrand(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i++]);
    }
    while (j < arr2.length) {
        result.push(arr2[j++]);
    }
    return result;
}

// Exporting the functions
module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    heapSort,
    countingSort,
    radixSort,
    bucketSort,
    shellSort,
    cocktailSort,
    combSort,
    gnomeSort,
    cycleSort,
    stoogeSort,
    bitonicSort,
    pancakeSort,
    bogoSort,
    sleepSort,
    strandSort
};

// End of file
// Path: Node.js/Practice Project/clx.js
// Author: Caleb 'Havoc' Merrill
