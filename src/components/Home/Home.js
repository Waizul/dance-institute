import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Dance from '../Dance/Dance';
import './Home.css'

const Home = () => {
    const [dances, setDances] = useState([])
    useEffect(()=>{
        fetch('./dance.json')
        .then(res=>res.json())
        .then(data=>setDances(data))
    },[])
    return (
		<div className='home'>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{dances.slice(0, 4).map((dance) => (
					<Grid item xs={12} sm={4} md={6}>
						<Dance dance={dance} key={dance.index}></Dance>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Home;