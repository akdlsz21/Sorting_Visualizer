const quickSort = (
	arr: number[],
	left: number,
	right: number,
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>
) => {
	const stateQueue: number[][] = [];
	let index: number;
	if (arr.length > 1) {
		index = partition(arr, left, right, stateQueue);
		if (left < index - 1) quickSort(arr, left, index - 1, setVisualArray);
		if (index < right) quickSort(arr, index, right, setVisualArray);
	}

	let delay = 0;
	for (let i = 0; i < stateQueue.length; i++) {
		setTimeout(() => {
			setVisualArray([...stateQueue[i]]);
		}, delay);
	}
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

export default quickSort;
