const quickSort = (arr: number[], left: number, right: number) => {
	let index: number;
	if (arr.length > 1) {
		index = partition(arr, left, right);
		if (left < index - 1) quickSort(arr, left, index - 1);
		if (index < right) quickSort(arr, index, right);
	}

	return arr;
};

const partition = (arr: number[], left: number, right: number) => {
	let pivot = arr[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		while (arr[i] < pivot) i++;
		while (arr[j] > pivot) j--;
		if (i <= j) {
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;
			j++;
		}
	}

	return i;
};

export default quickSort;
