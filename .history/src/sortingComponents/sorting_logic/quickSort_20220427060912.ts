const quickSort = (
	arr: number[],
	left: number,
	right: number,
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>
) => {
	const stateQueue: number[][] = [];
	_quickSort(arr, left, right, setVisualArray);
	let timer = 200;

	stateQueue.forEach((state) => {
		setTimeout(() => {
			setVisualArray([...state]);
		}, timer);
		timer += 200;
	});
};

const _quickSort = (
	arr: number[],
	left: number,
	right: number,
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>
) => {
	const stateQueue: number[][] = [];
	let index: number;
	if (arr.length > 1) {
		index = partition(arr, left, right, stateQueue);
		if (left < index - 1) _quickSort(arr, left, index - 1, setVisualArray);
		if (index < right) _quickSort(arr, index, right, setVisualArray);
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
			j--;
			stateQueue.push([...arr]);
		}
	}

	return i;
};

export default quickSort;
