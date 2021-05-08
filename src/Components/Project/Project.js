import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Frame, Scroll, useAnimation } from "framer";

import './Project.css';
import moon from '../../resources/icons/moon.svg';
import loop from '../../resources/icons/loop.svg';
import sound from '../../resources/icons/sound.svg';
import upArrow from '../../resources/icons/upArrow.svg';
import downArrow from '../../resources/icons/downArrow.svg';
import cross from '../../resources/icons/cross.svg';
import cleanex from '../../resources/images/pages/cleanex.png';
import fastMart from '../../resources/images/pages/fastMart.png';
import metroSpire from '../../resources/images/pages/metroSpire.png';
import fakeData from './fakeData';


function Project() {
	const { type, id } = useParams();
	const history = useHistory();

	const [projectInfo, setProjectInfo] = useState({
		screenshot: fastMart,
		headLine: 'FastMart | FASTEST ONLINE SHOPPING HUB',
		details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil.'
	});
	let screenshot;
	let headLine;
	let details;
	useEffect(() => {
		if (type === 'mern' && id === '1') {
			setProjectInfo({
				screenshot: fastMart,
				headLine: 'FastMart | FASTEST ONLINE SHOPPING HUB',
				details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil.'
			});
		}
		if (type === 'mern' && id === '2') {
			setProjectInfo({
				screenshot: cleanex,
				headLine: fakeData.cleanex.headLine,
				details: fakeData.cleanex.details
			});
		}
		if (type === 'react' && id === '1') {
			setProjectInfo({
				screenshot: metroSpire,
				headLine: fakeData.metroSpire.headLine,
				details: fakeData.metroSpire.details
			});
		}
		if (type === 'react' && id === '2') {
			setProjectInfo({
				screenshot: metroSpire,
				headLine: fakeData.metroSpire.headLine,
				details: fakeData.metroSpire.details
			});
		}
	}, [type]);

	const randomColor = ['#cfb4e8', '#ba94de'];

	const gradient = {
		backgroundImage: 'radial-gradient(circle, ' + randomColor[0] + ' 0%, ' + randomColor[0] + ' 10%, ' + randomColor[1] + ' 60%)'
	}

	const controls = useAnimation();
	controls.start({ y: -50 });

	return (
		<div style={gradient} className='Project'>
			<div className="leftSide">
				<div className="first">
					<img src={moon} alt="" />
				</div>
				<div className="second">
					<img src={loop} alt="" />
				</div>
				<div className="third">
					<img src={sound} alt="" />
				</div>
			</div>

			<div className="middlePart">
				<div className="crossHolder">
					<img style={{ cursor: 'pointer' }} onClick={() => history.push('/projects')} src={cross} alt="" />
				</div>
				<Scroll className='scroll' dragEnabled={true} direction="vertical" width={'57%'} height={'40vh'} radius={10}>
					<div className="holder">
						<img src={projectInfo.screenshot} alt="" />
					</div>
				</Scroll>
				<div className="title">
					{projectInfo.headLine}
				</div>
			</div>
			<div className="rightSide">
				<div className="first">
					<img src={upArrow} alt="" />
				</div>
				<div className="second">
					<div className="details">
						<p><Link to={`/project/${type}/${id}/details`}>DETAILS</Link></p>
					</div>
				</div>
				<div className="third">
					<img src={downArrow} alt="" />
				</div>
			</div>
			<div className="bottomPart">
				<div className="bottomHolder">
					<div className='bottom'>
						<p>Back</p>
						<p>|</p>
						<p>Live Site</p>
						<p>|</p>
						<p>Github Client</p>
						<p>|</p>
						<p>Github Server</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project;