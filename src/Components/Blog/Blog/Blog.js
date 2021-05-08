import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Blog.css';

import BlogGallery from '../BlogGallery/BlogGallery';
import { RouteLocationContext, ChangeRouteContext } from '../../../App';

import { motion } from 'framer-motion';

function Blog() {
	const history = useHistory();

	const [isNext, setIsNext] = useContext(ChangeRouteContext);
	const [routeLocation, setRouteLocation] = useContext(RouteLocationContext);

	setRouteLocation(history.location.pathname);

	useEffect(() => {
		if (isNext === 'prev') {
			history.push('/projects');
			setIsNext('stable');
		}
		if (isNext === 'next') {
			history.push('/contact');
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
		<motion.div className='Blog' initial="exit" animate="enter" exit="exit" variants={divVariants}>
			<BlogGallery />
		</motion.div>
	)
}

export default Blog;