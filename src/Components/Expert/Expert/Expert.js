import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Expert.css';

import ExpertInfo from '../ExpertInfo/ExpertInfo';
import { RouteLocationContext, ChangeRouteContext } from '../../../App';

import { motion } from 'framer-motion';

function Expert() {
	const history = useHistory();

	const [isNext, setIsNext] = useContext(ChangeRouteContext);
	const [routeLocation, setRouteLocation] = useContext(RouteLocationContext);

	setRouteLocation(history.location.pathname);

	useEffect(() => {
		if (isNext === 'next') {
			history.push('/projects');
			setIsNext('stable');
		} else if (isNext ==='prev'){
			history.push('/')
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
		<motion.div className='Expert' initial="exit" animate="enter" exit="exit" variants={divVariants}>
			<ExpertInfo />
		</motion.div>
	)
}

export default Expert;