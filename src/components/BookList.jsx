import {Typography} from '@mui/material';
import React from 'react';

export const BookList = ({Books}) => {
	return (
		<div data-test='book-list'>
			{Books.map((book) => (
				<div key={book.name} className='book-item'>
					<Typography variant='h5' component='h5' data-test='heading'>
						{book.name}
					</Typography>
				</div>
			))}
		</div>
	);
};
