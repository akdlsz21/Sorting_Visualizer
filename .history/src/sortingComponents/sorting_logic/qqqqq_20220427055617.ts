const quickSort = (arr: number[], left: number, right: number) => {
	const stateQueue: number[][] = [];
	let index: number;
	if (arr.length > 1) {
		index = partition(arr, left, right, stateQueue);
		if (left < index - 1) quickSort(arr, left, index - 1);
		if (index < right) quickSort(arr, index, right);
	}

	let timer = 50;
	console.log(123);
	console.log(stateQueue.length);
};

const partition = (
	arr: number[],
	left: number,
	right: number,
	stateQueue: number[][]
) => {
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
			stateQueue.push([...arr]);
		}
	}

	return i;
};

let array = [5, 1, 6, 7, 8, 3, 2, 2156, 5, 748, 11, 223, 567];

quickSort(array, 0, array.length - 1);
console.log('asdf');
export default quickSort;
