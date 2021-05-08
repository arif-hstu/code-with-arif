import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { motion } from "framer-motion"

import './NavBar.css';
import logo from '../../../resources/images/logoMain.svg';
import speechBubble from '../../../resources/images/speech-bubble.svg';
import avatar from '../../../resources/images/avatarPurple.svg';
import animatedLogo from '../../../resources/images/logoWIthoutEye.svg';
import light from '../../../resources/images/light.svg';

import { RouteLocationContext } from '../../../App';
import { MenuOpenContext } from '../../../App';

import Eye from '../Eye/Eye';
import Menu from '../../Menu/Menu/Menu';

function NavBar() {
	const history = useHistory();

	const [routeLocation, setRouteLocation] = useContext(RouteLocationContext);
	const [isMenuOpen, setIsMenuOpen] = useContext(MenuOpenContext);

	const [isOpen, setIsOpen] = useState(false);
	const [winWidth, setWinWidth] = useState(0);
	const [showLight, setShowLight] = useState(true);

	useEffect(() => {
		setShowLight(true);
		const arrow = document.querySelector("#arrow");
		window.addEventListener("mousemove", ({ clientX, clientY }) => {
			const angle = Math.atan2(clientY, clientX);
			arrow.style.transform = `rotate(${angle + 150}rad)`;
			arrow.style.transformOrigin = 'top left';
		});

		if (
			isMenuOpen ||
			routeLocation === '/projects' ||
			routeLocation === '/blog' ||
			routeLocation === '/contact') {
			setShowLight(false);
		}

		if (
			routeLocation === '/' ||
			routeLocation === '') {
			setIsOpen(true);
			setWinWidth(window.innerWidth);
		} else {
			setIsOpen(false);
			setWinWidth(window.innerWidth);
		}
	}, [routeLocation, window.innerWidth, isMenuOpen]);

	const variants = {
		open: { scale: 1, opacity: 1, x: 0 },
		closed: { scale: 0.3, opacity: 0, x: `-${winWidth / 4}px`, y: '-90%' },
	}

	const variantsFade = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	}

	return (
		<div hidden={history.location.pathname.slice(0, 9) === '/project/'} className='NavBarHolder'>
			<div className='NavBar'>
				<div className="logoHolder">
					<div className="logo">
						<Link to='/'><img src={logo} alt="Logo" /></Link>
						<div className='arrow' id="arrow">
							<img src={showLight && light} alt="" />
						</div>
					</div>
					<div className="bar">
						|
					</div>
					<Menu />
				</div>
				<motion.div
					className="avatarHolder"
					animate={isOpen ? 'open' : 'closed'}
					variants={variants}
				>
					<img src={avatar} alt="Avatar" />
					<Eye />

				</motion.div>

				<motion.div
					className='animatedLogoHolder'
					animate={!isOpen ? 'open' : 'closed'}
					variants={variantsFade}
				>
					<img src={animatedLogo} alt="" />
				</motion.div>

				<div className="infoHolder">
					<div  hidden={isMenuOpen}  className="resume">
						<a href="https://drive.google.com/uc?export=download&id=1FSc_CC53oor_h2ZJurIpxliEDHDZA0Ey">
							<button className='primaryBtn'>
								RESUME
						</button>
						</a>
					</div>
					<div  hidden={isMenuOpen} className="hire">
						<Link to='/contact'>
							<img src={speechBubble} alt="Message" />
							<p>HIRE ME</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar;

