import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import './BlogGallery.css';
import bar from '../../../resources/images/bar.png';
import cleanex from '../../../resources/images/screenCleanex.png';
import fastMart from '../../../resources/images/screenFastMart.png';
import metroSpire from '../../../resources/images/screenMetroSpire.png';
import zoomIn from '../../../resources/icons/zoomIn.svg';

function BlogGallery() {
	const history = useHistory();
	const [projectType, setProjectType] = useState('mern');
	const [underline, setUnderline] = useState(false);

	const filterType = (type) => {
		setProjectType(type);
		setUnderline(true);
	}

	const filterStyle = {
		borderBottom: '3px solid var(--white)'
	}

	const noFilterStyle = {
		borderBottom: 'none'
	}

	return (
		<div className=" BlogGallery">
			<div className='titleHolder'>
				<h1>BLOG</h1>
				<h1>MY PASSION GOES HERE</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="filterHolder">
				<Link style={projectType === 'mern' && filterStyle || noFilterStyle} to='#mern' onClick={() => { filterType('mern') }} className="filter filter1"><span>Node.js</span></Link>
				<Link style={projectType === 'react' && filterStyle || noFilterStyle} to='#react' onClick={() => { filterType('react') }} className="filter filter2">React.js</Link>
				<Link style={projectType === 'javascript' && filterStyle || noFilterStyle} to='#javascript' onClick={() => { filterType('javascript') }} className="filter filter3">Javascript</Link>
				<Link style={projectType === 'vue' && filterStyle || noFilterStyle} to='#vue' onClick={() => { filterType('vue') }} className="filter filter4">Vue.js</Link>
			</div>

			<div className="projectHolder">
				<div className='demo'>
					<div>
					</div>
				</div>
				<div className='demo'>
					<div>
						Comming soon...
					</div>
				</div>
				<div className='demo'>
					<div>
					</div>
				</div>
				{
					projectType === '' &&
					<>
						<div className="project">
							<img src={cleanex} alt="" className='projectImg' />
							<img src={zoomIn} alt="" className="icon" />
							<a className="title smallPara">Cleanex | Service Website</a>
						</div>
						<div className="project">
							<img src={fastMart} alt="" className='projectImg' />
							<img src={zoomIn} alt="" className="icon" />
							<a className="title smallPara">FastMart | Online Shopping Hub </a>
						</div>
					</>
				}
				{
					projectType === '' &&
					<>
						<div className="project">
							<img src={metroSpire} alt="" className='projectImg' />
							<img src={zoomIn} alt="" className="icon" />
							<a className="title smallPara">Cleanex | Service Website</a>
						</div>
						<div className="project">
							<img src={cleanex} alt="" className='projectImg' />
							<img src={zoomIn} alt="" className="icon" />
							<a className="title smallPara">Cleanex | Service Website</a>
						</div>
						<div className="project">
							<img src={metroSpire} alt="" className='projectImg' />
							<img src={zoomIn} alt="" className="icon" />
							<a className="title smallPara">Cleanex | Service Website</a>
						</div>
					</>
				}
				{
					projectType === '' &&
					<>
						<div className="project">
							<img src={fastMart} alt="" className='projectImg' />
							<img src={zoomIn} alt="" className="icon" />
							<a className="title smallPara">Cleanex | Service Website</a>
						</div>
					</>
				}

			</div>
		</div>
	)
}

export default BlogGallery;