import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './ProjectDetails.css';
import moon from '../../resources/icons/moon.svg';
import loop from '../../resources/icons/loop.svg';
import sound from '../../resources/icons/sound.svg';
import upArrow from '../../resources/icons/upArrow.svg';
import downArrow from '../../resources/icons/downArrow.svg';
import cross from '../../resources/icons/cross.svg';
import cleanex from '../../resources/images/pages/cleanex.jpg';

import fakeData from '../Project/fakeData';


function ProjectDetails() {
	const { type, id } = useParams();
	const history = useHistory();

	const [projectInfo, setProjectInfo] = useState({
		headLine: 'FastMart | FASTEST ONLINE SHOPPING HUB',
		details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil.'
	})

	const randomColor = [['#393939', '#1e1e1e'], ['#64d6e2', '#64d6e2']];

	const gradient = {
		backgroundImage: 'radial-gradient(circle, ' + randomColor[0][0] + ' 0%, ' + randomColor[0][0] + ' 10%, ' + randomColor[0][1] + ' 60%)'
	}

	useEffect(() => {
		if (type === 'mern' && id === '1') {
			setProjectInfo({
				headLine: 'FastMart | FASTEST ONLINE SHOPPING HUB',
				details: fakeData.fastMart.details,
				liveSite: fakeData.fastMart.liveSite,
				gitHubClient: fakeData.fastMart.gitHubClient,
				gitHubServer: fakeData.fastMart.gitHubServer
			});
		}
		if (type === 'mern' && id === '2') {
			setProjectInfo({
				headLine: fakeData.cleanex.headLine,
				details: fakeData.cleanex.details,
				liveSite: fakeData.cleanex.liveSite,
				gitHubClient: fakeData.cleanex.gitHubClient,
				gitHubServer: fakeData.cleanex.gitHubServer
			});
		}
		if (type === 'react' && id === '1') {
			setProjectInfo({
				headLine: fakeData.metroSpire.headLine,
				details: fakeData.metroSpire.details,
				liveSite: fakeData.metroSpire.liveSite,
				gitHubClient: fakeData.metroSpire.gitHubClient,
				gitHubServer: fakeData.metroSpire.gitHubServer
			});
		}
		if (type === 'react' && id === '2') {
			setProjectInfo({
				headLine: fakeData.metroSpire.headLine,
				details: fakeData.metroSpire.details,
				liveSite: fakeData.metroSpire.liveSite,
				gitHubClient: fakeData.metroSpire.gitHubClient,
				gitHubServer: fakeData.metroSpire.gitHubServer
			});
		}
	}, [type]);

	return (
		<div style={gradient} className='ProjectDetails'>
			<div className="leftSide">

			</div>

			<div className="middlePart">
				<div className="crossHolder">
					<img style={{cursor: 'pointer'}} onClick={() => history.push(`/project/${type}/${id}`)} src={cross} alt="" />
				</div>
				<div className="detailsHolder">
					<h3>
						Overview
					</h3>
					<p>
						{projectInfo.headLine}
					</p>
					<p>
					{projectInfo.details.points}
					</p>
					<h3>
						Technology
					</h3>
					<p>
						{projectInfo.details.technology}
					</p>
				</div>
			</div>
			<div className="rightSide">

			</div>
			<div className="bottomPart">
				<div className="bottomHolder">
					<div className='bottom'>
						<p hidden>Back</p>
						<p hidden>|</p>
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

export default ProjectDetails;