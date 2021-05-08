import React from 'react';
import { useParams } from 'react-router-dom';

import './ProjectDetails.css';
import moon from '../../resources/icons/moon.svg';
import loop from '../../resources/icons/loop.svg';
import sound from '../../resources/icons/sound.svg';
import upArrow from '../../resources/icons/upArrow.svg';
import downArrow from '../../resources/icons/downArrow.svg';
import cross from '../../resources/icons/cross.svg';
import cleanex from '../../resources/images/pages/cleanex.jpg';


function ProjectDetails() {
	const { type, id } = useParams();

	const randomColor = ['#393939', '#1e1e1e'];

	const gradient = {
		backgroundImage: 'radial-gradient(circle, ' + randomColor[0] + ' 0%, ' + randomColor[0] + ' 10%, ' + randomColor[1] + ' 60%)'
	}

	return (
		<div style={gradient} className='ProjectDetails'>
			<div className="leftSide">
				
			</div>

			<div className="middlePart">
				<div className="crossHolder">
					<img src={cross} alt="" />
				</div>
			</div>
			<div className="rightSide">
			
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

export default ProjectDetails;