import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Projects.css';

import ProjectGallery from '../ProjectGallery/ProjectGallery';
import { RouteLocationContext, ChangeRouteContext } from '../../../App';

import { motion } from 'framer-motion';

function Projects() {
	const history = useHistory();

	const [isNext, setIsNext] = useContext(ChangeRouteContext);
	const [routeLocation, setRouteLocation] = useContext(RouteLocationContext);

	setRouteLocation(history.location.pathname);

	useEffect(() => {
		if (isNext === 'prev') {
			history.push('/expertise');
			setIsNext('stable');
		}
		if (isNext === 'next') {
			history.push('/blog');
			setIsNext('/stable');
		}
	}, [isNext]);

	const transition = {
		duration: 0.3,
		ease: [0.17, 0.67, 0.83, 0.67]
	};
	const transition2 = {
		duration: 0.3,
		ease: [0.17, 0.67, 0.83, 0.67]
	};

	const divVariants = {
		exit: { y: '-100%', opacity: 0, transition },
		enter: {
			y: "0%",
			opacity: 1,
			transition2
		}
	};

	return (
		<motion.div className='Projects' initial="exit" animate="enter" exit="exit" variants={divVariants}>
			<ProjectGallery />
		</motion.div>
	)
}

export default Projects;