import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Contact.css';

import ContactInfo from '../ContactInfo/ContactInfo';
import { RouteLocationContext, ChangeRouteContext } from '../../../App';

import { motion } from 'framer-motion';

function Contact() {
	const history = useHistory();

	const [isNext, setIsNext] = useContext(ChangeRouteContext);
	const [routeLocation, setRouteLocation] = useContext(RouteLocationContext);

	setRouteLocation(history.location.pathname);

	useEffect(() => {
		if (isNext === 'prev') {
			history.push('/blog');
			setIsNext('stable');
		} 
	}, [isNext]);

	const transition = {
		duration: 0.3,
		ease: [0.43, 0.13, 0.23, 0.96]
	};
	const transition2 = {
		duration: 0.3,
		ease: [0.43, 0.13, 0.23, 0.96]
	};

	const divVariants = {
		exit: { y: '-100%', opacity: 1, transition },
		enter: {
			y: "0%",
			opacity: 1,
			transition2
		}
	};

	return (
		<motion.div className='Contact' initial="exit" animate="enter" exit="exit" variants={divVariants}>
			<ContactInfo />
		</motion.div>
	)
}

export default Contact;