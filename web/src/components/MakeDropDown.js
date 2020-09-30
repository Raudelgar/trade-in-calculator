import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllMakes } from '../redux/actions/tradeActions';

export const MakeDropDown = ({ onChange, year }) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const makes = useSelector(({ allMakes }) => allMakes);

	useEffect(() => {
		if (year !== undefined && makes.length === 0) {
			dispatch(loadAllMakes(year));
			setLoading(true);
		} else if (makes.length > 0) {
			setLoading(false);
		}
	}, [year, makes, dispatch]);

	return (
		<Dropdown
			name='make'
			placeholder='Make...'
			fluid
			search
			selection
			loading={loading}
			options={makes || ''}
			onChange={onChange}
			disabled={year === undefined}
		/>
	);
};

MakeDropDown.propTypes = {
	onChange: PropTypes.func.isRequired,
	year: PropTypes.number,
};
