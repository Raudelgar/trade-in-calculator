import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { format as d3Format } from 'd3-format';

import { MakeDropDown } from '../../components/MakeDropDown';
import { ModelDropDown } from '../../components/ModelDropDown';
import usePrevious from '../../hooks/usePrevious';
import {
	clearAllMakes,
	clearModelsMakes,
} from '../../redux/actions/tradeActions';

import './TradeForm.scss';
import { MileageInput } from '../../components/MileageInput';

export const TradeForm = ({ years }) => {
	const [state, setState] = useState({
		year: undefined,
		make: undefined,
		model: undefined,
		mileage: '',
	});
	const [mileageAlert, setMileageAlert] = useState(false);
	const prevYear = usePrevious(state.year);
	const prevMake = usePrevious(state.make);
	const dispatch = useDispatch();

	useEffect(() => {
		if (state.year !== prevYear) {
			dispatch(clearAllMakes());
			setState({
				year: state.year,
				make: undefined,
				model: undefined,
				mileage: '',
			});
		}
		if (state.make !== prevMake) {
			dispatch(clearModelsMakes());
			setState((curr) => ({
				...curr,
				make: state.make,
				model: undefined,
				mileage: '',
			}));
		}
	}, [state.year, state.make, prevYear, dispatch, prevMake]);

	const handleFormChange = (e, { name, value }) => {
		name = name ? name : e.target.name;
		setState((curr) => ({
			...curr,
			[name]: value,
		}));
	};
	const handleInput = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		//special handler for mileage
		if (name === 'mileage') {
			console.log('before', value);
			let lastCh = value.substr(-1);
			if (value.trim() !== '' && !Number.isNaN(lastCh)) {
				let num = Number.parseInt(value.replace(/,/g, ''));
				handleBigMiles(num);
				let valueForm = String(d3Format(',')(num));
				setState((curr) => ({
					...curr,
					[name]: valueForm,
				}));
			} else {
				setState((curr) => ({
					...curr,
					[name]: '',
				}));
			}
			console.log('end', value);
		}
	};

	const handleBigMiles = (num) => {
		if (num > 200000) {
			setMileageAlert(true);
		} else if (mileageAlert) {
			setMileageAlert(false);
		}
	};
	const handleSearch = () => console.log('Trade', state);

	return (
		<Container>
			<Header as='h2' style={{ margin: '3em 0 2em' }}>
				Trade-In Calculator
			</Header>
			<div className='form-body'>
				<Dropdown
					name='year'
					placeholder='Year...'
					fluid
					search
					selection
					loading={years.length === 0}
					options={years}
					onChange={handleFormChange}
				/>
				<MakeDropDown onChange={handleFormChange} year={state.year} />
				<ModelDropDown
					year={state.year}
					make={state.make}
					onChange={handleFormChange}
				/>
				<MileageInput
					mileage={state.mileage}
					model={state.model}
					onChange={handleInput}
					alert={mileageAlert}
				/>
				<Button
					primary
					className='trade-btn'
					disabled={state.mileage === ''}
					onClick={handleSearch}
				>
					Search
				</Button>
			</div>
		</Container>
	);
};

TradeForm.propTypes = {
	years: PropTypes.array.isRequired,
};
