/**
 * Start all vehicles off with a base price of $40,000
 * Reduce the vehicle value $2,000 for each year after its manufacture year
 * Reduce the vehicle value $0.05 every mile it has been driven
 */
const CAR_MAX_VALUE = 40000;
export function calculateEstimate({ year, mileage }) {
	const todayYear = new Date().getFullYear();
	const yearDeduction = (todayYear - year) * 2000;
	const mileageDeduction = mileage * 0.05;

	return CAR_MAX_VALUE - yearDeduction - mileageDeduction;
}
