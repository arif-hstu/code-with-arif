import React from 'react';
import { motion } from 'framer-motion';

import './ExpertInfo.css';
import bar from '../../../resources/images/bar.png';
import html from '../../../resources/icons/html.svg';
import css from '../../../resources/icons/css.svg';
import sass from '../../../resources/icons/sass.svg';
import js from '../../../resources/icons/js.svg';
import react from '../../../resources/icons/react.svg';
import node from '../../../resources/icons/node.svg';

import percent90 from '../../../resources/images/percent90.svg';
import percent85 from '../../../resources/images/percent85.svg';
import percent70 from '../../../resources/images/percent70.svg';
import percent75 from '../../../resources/images/percent75.svg';
import percent60 from '../../../resources/images/percent60.svg';

function ExpertInfo() {


	return (
		<div className=" ExpertInfo">
			<div className='titleHolder'>
				<h1>Front-End Web Developer</h1>
				<h1>Graphic Designer</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="infoHolder">
				<div className="skills">
					<div className="skill">
						<img src={html} alt="" />
						<h3>HTML5</h3>
						<img src={percent90} alt="" />
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
					<div className="skill">
						<img src={css} alt="" />
						<h3>CSS3</h3>
						<img src={percent85} alt="" />
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
					<div className="skill">
					<img src={sass} alt="" />
						<h3>
							SASS
					</h3>
						<img src={percent70} alt="" />
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
					<div className="skill">
					<img src={js} alt="" />
						<h3>
							JAFASCRIPT
					</h3>
						<img src={percent75} alt="" />
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
					<div className="skill">
					<img src={react} alt="" />
						<h3>
							REACT
					</h3>
						<img src={percent85} alt="" />
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
					<div className="skill">
					<img src={node} alt="" />
						<h3>
							NODE
					</h3>
						<img src={percent60} alt="" />
						<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
					</div>
				</div>
				<div hidden className='graphHolder'>
					<div className="graph">
						<p className="smallPara">
							Specialized in UI/UX
						</p>
						<img src={bar} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExpertInfo;