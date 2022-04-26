const bubbleSort = (
	visualArray: number[],
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>
) => {
	const array = [...visualArray];
	const stateQueue = [];

	for (let i = 0; i < array.length; i++) {
		console.log(i);

		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				stateQueue.push([...array]);
			}
		}
	}

	let timer = 50;
	stateQueue.forEach((state, idx) => {
		setTimeout(() => {
			setVisualArray(state);
			console.log(idx);
		}, timer);
		timer += 50;
	});
};

export default bubbleSort;
