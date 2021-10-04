import React from 'react';
import Nav from '../Nav/Nav';
import headerImg from './../Image/header.jpg'
import './Header.css'

const Header = () => {
    return (
		<div>
			<Nav></Nav>
			<div className='header'>
				<img src={headerImg} alt=''></img>

				<div>
                    <h1>Dance Day</h1>
					<p>
						Dancing is an activity where you move your entire body,
						it is like an exercise. So, dancing helps you strengthen
						your bones and muscles. It increases your strength and
						energy to do more.
					</p>
					<p>
						According to a study, dancing helps you keep your heart
						healthy. People who dance regularly are at a lower risk
						of heart problems.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Header;