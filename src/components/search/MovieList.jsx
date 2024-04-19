import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import "./MovieList.css"
import { useNavigate } from 'react-router';
import Pagination from '@mui/material/Pagination';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	cursor: 'pointer'
}));

export default function MovieList({ totalResult, getSerchData, page }) {
	const navigate = useNavigate();
	const data = useSelector(state => state.movies.searchMovieList)
	const searchErrorResult = useSelector(state => state.movies.searchErrorResult)
	const searchText = useSelector(state => state.movies.searchText);
	const handleClick = (imdbID) => {
		navigate(`details/${imdbID}`)
	}
	const onDataPageChange = (event, page) => {
		getSerchData(searchText, page)
	}
	return (
		<Box sx={{ width: '70%', marginLeft: '15%' }}>
			<Stack spacing={1}>
				{searchErrorResult != "" ? <Item>Movie Not Found</Item> :
					<> {data?.map((item) =>
						<Item onClick={() => handleClick(item.imdbID)}>
							<div className='movie-wrapper'>
								<div>
									<img
										src={item.Poster}
										alt={item.title}
										loading="lazy"
										className='movie-poster'
									/>
								</div>
								<div className='movie-title'>
									<div>
										Title:{item.Title}
									</div>
									<div>
										Year:{item.Year}
									</div>
								</div>
							</div>
						</Item>

					)}
					</>}
				{data.length > 0 ? <Pagination count={parseInt(totalResult / 10)}
					page={page}
					onChange={onDataPageChange}
					color="primary" /> : <></>}
			</Stack>
		</Box>
	);
}