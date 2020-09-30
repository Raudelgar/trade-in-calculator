const reduxLogger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log(`The action called is: `, action);
	const result = next(action);
	console.log(`The new store is: `, store.getState());
	console.groupEnd();

	return result;
};

export default reduxLogger;
