import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Class from './../Class/Class';
import './Classes.css';

const Classes = () => {
	const [danceClasses, setDanceClasses] = useState([]);
	useEffect(() => {
		fetch('./dance.json')
			.then((res) => res.json())
			.then((data) => setDanceClasses(data));
	}, []);
	return (
		<div className='classes'>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{danceClasses.map((danceClass) => (
					<Grid item xs={12} sm={4} md={4}>
						<Class danceClass={danceClass}></Class>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Classes;
