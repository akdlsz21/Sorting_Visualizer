import React, { useEffect, useState } from 'react';
import { Array, ArrayBar, ButtonContainer } from './styles/Sorting.styled';
import resetArray from './sorting_logic/resetArray';
import bubbleSort from './sorting_logic/bubbleSort';
import mergeSort from './sorting_logic/mergeSort';

const Sorting = () => {
	const [visualArray, setVisualArray] = useState<Array<number>>([]);

	useEffect(() => {
		resetArray(setVisualArray);
	}, []);

	useEffect(() => {
		console.log(visualArray);
	}, [visualArray]);

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
			</ButtonContainer>
		</>
	);
};

export default Sorting;
