import React, { useEffect, useState } from 'react';
import { TradeForm } from '../trade/TradeForm';

const App = () => {
	const [years, setYears] = useState([]);

	useEffect(() => {
		//filling 50 years
		let years = [];
		const today = new Date().getFullYear();
		for (let i = 0; i < 40; i++) {
			let y = today - i;
			years.push({ key: y, value: y, text: y });
		}
		setYears(years);
	}, []);

	return <TradeForm years={years} />;
};

export default App;
