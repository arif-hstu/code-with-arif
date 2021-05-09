import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import './ContactInfo.css';
import bar from '../../../resources/images/bar.png';
import github from '../../../resources/icons/github.svg';
import linkedIn from '../../../resources/icons/linkedin.svg';
import facebook from '../../../resources/icons/facebook.svg';
import twitter from '../../../resources/icons/twitter.svg';

function ContactInfo() {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<div className=" ContactInfo">
			<div className='titleHolder'>
				<h1>CONTACT ME</h1>
				<h1>LETS GET IN TOUCH</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="detailsHolder">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="part1">
						<input placeHolder='Name' {...register("exampleRequired", { required: true })} />
						<input placeHolder='Contact No' {...register("exampleRequired", { required: true })} />
						<input placeHolder='Email' {...register("exampleRequired", { required: true })} />
					</div>
					<div className="part2">
						<input id='message' placeHolder='Type your message Here' {...register("exampleRequired", { required: true })} />
					</div>
					<div className="part3">
						<input id='primaryBtn' type="submit" />
						{errors.exampleRequired && <span>The field is required</span>}
					</div>
				</form>
			</div>
			<div className="socialIcons">
				<div className="icons">
					<a target='_blank' href="https://github.com/arif-hstu"><img src={github} alt="GitHub" /></a>
					<a target='_blank' href="https://www.linkedin.com/in/arif-hstu"><img src={linkedIn} alt="LinkedIn" /></a>
					<a target='_blank' href="https://facebook.com/arifhstu"><img src={facebook} alt="Facebook" /></a>
					<a href="#"><img src={twitter} alt="Twitter" /></a>
				</div>
			</div>
		</div>
	)
}

export default ContactInfo;