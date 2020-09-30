import React from 'react';
import PropTypes from 'prop-types';

import './MileageInput.scss';

export const MileageInput = ({ mileage, model, onChange, alert }) => {
	return (
		<div className='trade-mileage-wrapper'>
			<div
				className={
					mileage === '' ? 'trade-mileage-div-disabled' : 'trade-mileage-div'
				}
			>
				<input
					className={
						mileage === ''
							? 'trade-mileage-input-disabled'
							: 'trade-mileage-input'
					}
					name='mileage'
					type='text'
					placeholder='Mileage...'
					value={mileage}
					onChange={onChange}
					disabled={model === undefined}
				/>
			</div>
			{alert && (
				<div className='trade-mileage-alert-div'>
					<p className='trade-mileage-alert'>
						Big Miles!! Please, verify your car's mileage
					</p>
				</div>
			)}
		</div>
	);
};

MileageInput.propTypes = {
	mileage: PropTypes.string.isRequired,
	model: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	alert: PropTypes.bool.isRequired,
};
