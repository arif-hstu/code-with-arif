import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Frame, Scroll, useAnimation } from "framer";

import './Project.css';
import moon from '../../resources/icons/moon.svg';
import loop from '../../resources/icons/loop.svg';
import sound from '../../resources/icons/sound.svg';
import upArrow from '../../resources/icons/upArrow.svg';
import downArrow from '../../resources/icons/downArrow.svg';
import cross from '../../resources/icons/cross.svg';
import cleanex from '../../resources/images/pages/cleanex.jpg';


function Project() {
	const { type, id } = useParams();

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
					<img src={cross} alt="" />
				</div>
				<Scroll className='scroll' dragEnabled={true}  scrollAnimate = { controls } direction="vertical" width={'57%'} height={'40vh'} radius={10}>
					<div className="holder">
						<img src={cleanex} alt="" />
					</div>
				</Scroll>
				<div className="title">
					CLEANEX | URBAN CLEANING SERVICE
				</div>
			</div>
			<div className="rightSide">
				<div className="first">
					<img src={upArrow} alt="" />
				</div>
				<div className="second">
					<div className="details">
						<p><Link to='/project/mern/1/details/'>Live Site</Link></p>
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