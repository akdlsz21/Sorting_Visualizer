import React, { useEffect, useState } from 'react';
import { Array, ArrayBar, ButtonContainer } from './styles/Sorting.styled';
import resetArray from './sorting_logic/resetArray';
import bubbleSort from './sorting_logic/bubbleSort';
import mergeSort from './sorting_logic/mergeSort';
import quickSort from './sorting_logic/quickSort';

const Sorting = () => {
	const [visualArray, setVisualArray] = useState<Array<number>>([]);

	useEffect(() => {
		resetArray(setVisualArray);
	}, []);

	return (
		<>
			<Array>
				{visualArray.map((val: any, idx) => {
					return <ArrayBar key={idx} style={{ height: val }}></ArrayBar>;
				})}
			</Array>
			<ButtonContainer>
				<button onClick={() => resetArray(setVisualArray)}>
					배열 초기화
				</button>
				<button onClick={() => bubbleSort(visualArray, setVisualArray)}>
					Bubble Sort
				</button>
				<button onClick={() => mergeSort(visualArray, setVisualArray)}>
					Merge Sort
				</button>
				<button onClick={() => quickSort(visualArray, setVisualArray)}>
					Quick Sort
				</button>
			</ButtonContainer>
		</>
	);
};

export default Sorting;
