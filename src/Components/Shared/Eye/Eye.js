import React, { useState, useEffect } from 'react';
import './Eye.css';
function Eye() {
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth
	})

	useEffect(() => {
		function handleResize() {
			setDimensions({
				width: window.innerWidth
			})
		}
		window.addEventListener('resize', handleResize);

	}, []);

	let doc = document.documentElement;
	let clientHeight = doc.clientHeight;
	let clienthWidth = doc.clientWidth;

	document.addEventListener("mousemove", event => {
		let x;
		let y;
		let xw;
		let yh;

		x = event.clientX;
		y = event.clientY;
		xw = (x * 300) / clienthWidth;
		yh = (y * 200) / clientHeight;

		let ball = document.querySelectorAll(".ball");

		for (var i = 0; i < 2; i++) {
			ball[i].style.top = yh * 0.3 + 65 + "%";
			ball[i].style.left = xw * 0.2 + 25 + "%";

			// ball[i].style.top = yh * 0.3 + 60 + "%";
			// ball[i].style.left = xw * 0.2 + 40 + "%";

			ball[i].style.transition = "(-50%, -50%)";
		}
	});

	return (
		<div id={dimensions.width} className="Eye">
			<div className='first'>
				<div
					style={{ left: '65%', top: '95%' }}
					className="ball"
				/>
			</div>
			<div className='second'>
				<div
					style={{ left: '65%', top: '95%' }}
					className="ball"
				/>
			</div>
		</div>
	)
}

export default Eye;