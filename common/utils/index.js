import React, { useState, useEffect } from 'react';

export function usePrevious(value) {
	const ref = React.useRef();
	React.useEffect(() => {
		ref.current = value;
	}, [value]);
}

export function numberFormat(d) {
	return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function capitalize(s) {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export function clearURL(url, params) {
	if (!url) {
		return '';
	}

	let getURL = new URL(url);
	let urlSearchParams = getURL.searchParams;

	params.map((d) => urlSearchParams.delete(d));

	getURL.search = urlSearchParams.toString();

	return getURL.toString();
}

export const useWindowSize = () => {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined
	});
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		// Add event listener
		window.addEventListener('resize', handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
};

export const useIntersection = (element, rootMargin) => {
	const [isVisible, setState] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setState(entry.isIntersecting);
			},
			{ rootMargin }
		);

		element.current && observer.observe(element.current);

		return () => observer.unobserve(element.current);
	}, []);

	return isVisible;
};


export const useSignupBtnRootMargin = (containerRef, btnRef) => {

	const [signupBtn, setSignupBtn] = useState({});

	useEffect(() => {
		
		setSignupBtn({
			marginBottom: containerRef?.current.offsetHeight - btnRef?.current.offsetTop,
			marginTop : containerRef?.current.offsetHeight - (btnRef?.current.offsetTop + btnRef?.current.offsetHeight),
			height: btnRef?.current.offsetHeight,
		});
		// console.log({
		// 	marginTop: containerRef?.current.offsetHeight - btnRef?.current.offsetTop,
		// 	marginBottom : containerRef?.current.offsetHeight - (btnRef?.current.offsetTop + btnRef?.current.offsetHeight),
		// 	height: btnRef?.current.offsetHeight,
		// })
		
	}, [btnRef, containerRef]);
	return signupBtn?.marginBottom ? `${signupBtn.marginTop * -1}px 0px ${signupBtn.marginBottom}px 0px` : '0px';
}