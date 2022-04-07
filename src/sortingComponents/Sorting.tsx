import React, { useEffect, useState } from 'react';

const Sorting = () => {
	const [visualArray, setVisualArray] = useState<Array<Number>>([
		5, 2, 6, 4, 8,
	]);

	useEffect(() => {}, []);

	const handleResetArray = () => {
		console.log('reset');
	};

	return (
		<>
			<div>
				{visualArray.map((val, idx) => {
					return <div key={idx}>{val}</div>;
				})}
			</div>
			<button onClick={() => handleResetArray()}>배열 초기화</button>
		</>
	);
};

export default Sorting;
