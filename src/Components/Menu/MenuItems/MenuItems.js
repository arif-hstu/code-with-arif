import React from 'react';
import { motion } from 'framer-motion';

import './MenuItems.css';
import bar from '../../../resources/images/bar.png';
import blogSeo from '../../../resources/images/blogSeo.png';
import blogApi from '../../../resources/images/blogApi.jpg';
import blogCrypto from '../../../resources/images/blogCrypto.png';

function MenuItems() {


	return (
		<div className=" MenuItems">
			<div className='titleHolder'>
				<h1>BLOG</h1>
				<h1>HERE GOES MY PASSION</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="blogHolder">
				<div className="blog">
					<h3>Monitor Your SEO Placement with SEO base</h3>
					<div style={{backgroundImage:`url(${blogSeo})`, backgroundPosition: 'center center'}} className="imageHolder">
						
					</div>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
				<div className="blog">
					<h3>Five Top Quality APIs</h3>
					<div style={{backgroundImage:`url(${blogApi})`, backgroundPosition: 'center center'}}  className="imageHolder">
						
					</div>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
				<div  className="blog">
					<h3>
						Get Your Business Portected From Cyberthreat
					</h3>
					<div style={{backgroundImage:`url(${blogCrypto})`, backgroundPosition: 'center center'}}  className="imageHolder">
						
					</div>
					<p className='smallPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum quo iusto culpa! Accusantium, laboriosam?</p>
				</div>
			</div>
		</div>
	)
}

export default MenuItems;