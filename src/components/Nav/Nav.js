import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
	const activeStyle = {
    fontWeight: "bold",
    color: "red"
	}
	
    return (
		<nav>
			<ul className='navbar'>
				
					<NavLink to='/home' activeStyle={activeStyle}>
						Home
					</NavLink>
			
				<li></li>
				<li>
					<NavLink to='/classes' activeStyle={activeStyle}>
						Our Classes
					</NavLink>
				</li>
				<li>
					<NavLink to='/features' activeStyle={activeStyle}>
						Our Features
					</NavLink>
				</li>
				<li>
					<NavLink to='/about' activeStyle={activeStyle}>
						About Us
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;