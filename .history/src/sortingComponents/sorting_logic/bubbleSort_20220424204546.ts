const bubbleSort = (
	visualArray: number[],
	setVisualArray: React.Dispatch<React.SetStateAction<number[]>>
) => {
	const array = [...visualArray];
	let timeout = 50;

	for (let i = 0; i < array.length; i++) {
		console.log(i);

		for (let j = 0; j < array.length - i - 1; j++) {
			setTimeout(() => {
				if (array[j] > array[j + 1]) {
					let temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
					// await wait(timeout);
					setVisualArray([...array]);
				}
			}, timeout);
			timeout += 50;
		}
	}
};

export default bubbleSort;
