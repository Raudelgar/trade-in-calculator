import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadModelsByMakes,
	loadModelsByMakesAndYear,
} from '../redux/actions/tradeActions';

export const ModelDropDown = ({ year, make, onChange }) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const models = useSelector(({ modelsMake }) => modelsMake);

	useEffect(() => {
		if (make !== undefined && models.length === 0) {
			if (year > 1990) {
				dispatch(loadModelsByMakesAndYear(make, year));
			} else {
				dispatch(loadModelsByMakes(make));
			}
			setLoading(true);
		} else if (models.length > 0) {
			setLoading(false);
		}
	}, [year, make, models, dispatch]);

	return (
		<Dropdown
			name='model'
			placeholder='Model...'
			fluid
			search
			selection
			loading={loading}
			options={models}
			onChange={onChange}
			disabled={make === undefined}
		/>
	);
};

ModelDropDown.propTypes = {
	onChange: PropTypes.func.isRequired,
	year: PropTypes.number,
	make: PropTypes.string,
};
