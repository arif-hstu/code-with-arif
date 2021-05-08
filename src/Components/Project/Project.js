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

	const [randomNumber, setRandomNumber] = useState(0);
	const [projectInfo, setProjectInfo] = useState({
		screenshot: fastMart,
		headLine: 'FastMart | FASTEST ONLINE SHOPPING HUB',
		details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil.',
		liveSite: 'https://fast-mart.web.app/',
		gitHubClient: 'https://github.com/arif-hstu/fastmart-mern-client',
		gitHubServer: 'https://github.com/arif-hstu/fastmart-mern-server'
	});
	let screenshot;
	let headLine;
	let details;
	useEffect(() => {
		if (type === 'mern' && id === '1') {
			setProjectInfo({
				screenshot: fastMart,
				headLine: 'FastMart | FASTEST ONLINE SHOPPING HUB',
				details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil.',
				liveSite: 'https://fast-mart.web.app/',
				gitHubClient: 'https://github.com/arif-hstu/fastmart-mern-client',
				gitHubServer: 'https://github.com/arif-hstu/fastmart-mern-server'
			});
		}
		if (type === 'mern' && id === '2') {
			setProjectInfo({
				screenshot: cleanex,
				headLine: fakeData.cleanex.headLine,
				details: fakeData.cleanex.details,
				liveSite: fakeData.cleanex.liveSite,
				gitHubClient: fakeData.cleanex.gitHubClient,
				gitHubServer: fakeData.cleanex.gitHubServer
			});
		}
		if (type === 'react' && id === '1') {
			setProjectInfo({
				screenshot: metroSpire,
				headLine: fakeData.metroSpire.headLine,
				details: fakeData.metroSpire.details,
				liveSite: fakeData.metroSpire.liveSite,
				gitHubClient: fakeData.metroSpire.gitHubClient,
				gitHubServer: fakeData.metroSpire.gitHubServer
			});
		}
		if (type === 'react' && id === '2') {
			setProjectInfo({
				screenshot: metroSpire,
				headLine: fakeData.metroSpire.headLine,
				details: fakeData.metroSpire.details,
				liveSite: fakeData.metroSpire.liveSite,
				gitHubClient: fakeData.metroSpire.gitHubClient,
				gitHubServer: fakeData.metroSpire.gitHubServer
			});
		}

		setRandomNumber(Math.floor(Math.random() * (randomColor.length)));
	}, [type]);

	const randomColor = [['#393939', '#1e1e1e'], ['#cfb4e8', '#ba94de'], ['#785ebb', '#785ebb'], ['#a09de5', '#a09de5'], ['#79bbb5', '#79bbb5'], ['#dfbc94','#dfbc94'], ['#63c5ab','#63c5ab'], ['#87c4a3','#87c4a3']];
	
	const gradient = {
		backgroundImage: 'radial-gradient(circle, ' + randomColor[randomNumber][0] + ' 0%, ' + randomColor[randomNumber][0] + ' 10%, ' + randomColor[randomNumber][1] + ' 60%)'
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
						<p><Link style={{color: `${randomColor[randomNumber][0]}`}} to={`/project/${type}/${id}/details`}>DETAILS</Link></p>
					</div>
				</div>
				<div className="third">
					<img src={downArrow} alt="" />
				</div>
			</div>
			<div className="bottomPart">
				<div className="bottomHolder">
					<div className='bottom'>
						<p hidden>Back</p>
						<p hidden> |</p>
						<a target='_blank' href={projectInfo.liveSite}>Live Site</a>
						<p>|</p>
						<a target='_blank' href={projectInfo.gitHubClient}>Github Client</a>
						<p>|</p>
						<a target='_blank' href={projectInfo.gitHubServer}>Github Server</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project;