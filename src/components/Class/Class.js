import React from 'react';
import './Class.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Class = (props) => {
	const { title, img, price, description } = props.danceClass;
	console.log(props.key);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader title={title} className='title'/>
			<CardMedia component='img' height='194' image={img} alt='' />
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					{description.slice(0, 100)}
				</Typography>
				<Typography variant='body2' color='red'>
					{price}
				</Typography>
			</CardContent>
		</Card>
	);
};


export default Class;