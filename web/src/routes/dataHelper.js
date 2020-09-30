export function formatDropdownData(data, format) {
	// const formatData = data.map((x) => ({
	// 	key: x[`${format}_ID`],
	// 	value: x[`${format}_Name`],
	// 	text: x[`${format}_Name`],
	// }));
	// return [
	// 	{
	// 		key: `${format}_ID_Empty`,
	// 		value: `Your ${format}`,
	// 		text: `Your ${format}`,
	// 	},
	// 	...formatData,
	// ];
	return data.map((x) => ({
		key: x[`${format}_ID`],
		value: x[`${format}_Name`],
		text: x[`${format}_Name`],
	}));
}
