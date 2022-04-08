function merge(
	left: number[],
	right: number[],
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>
) {
	let arr: any = [];

	let timeout = 250;

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}

		setTimeout(() => {
			setVisualArray(arr);
		}, timeout);
		timeout += 250;
		console.log(arr);
	}

	if (left !== null) arr.push(...right);
	if (right !== null) arr.push(...left);

	return arr;
}

function mergeSort(
	array: number[],
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>
): any[] {
	const half = Math.floor(array.length / 2);

	// Base case or terminating case
	if (array.length <= 1) return array;

	// splice is an inplace method,
	const left = array.splice(0, half);
	const right = array;

	const mergedLeft = mergeSort(left, setVisualArray); //[4]

	const mergedRight = mergeSort(right, setVisualArray); // [2]

	const mergedArray = merge(mergedLeft, mergedRight, setVisualArray);

	return mergedArray;
}

export default mergeSort;
