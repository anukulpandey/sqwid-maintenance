import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
	position: fixed;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 700;
	font-size: 1.25rem;
	padding: ${props => ((props as any).blur ? `1.25rem 1.5rem` : `2.5rem 3.75rem`)};
	backdrop-filter: ${props =>
		(props as any).blur ? `blur(5px) brightness(0.375) saturate(0.25)` : `none`};
	z-index: 50;
	top: 0;
	/* border-bottom: ${props =>
		(props as any).blur ? `1px` : `0`} solid var(--app-container-bg-primary); */
	transition: backdrop-filter 0.2s ease, padding 0.2s ease;
	&:after {
		position: absolute;
		content: "";
		bottom: 0;
		left: 0;
		background: var(--app-container-bg-primary);
		height: 1px;
		width: 100%;
		display: block;
		opacity: ${props => ((props as any).blur ? `1` : `0`)};
		z-index: -1;
	}
`;

const LogoContainer = styled.a`
	cursor: pointer;
	user-select: none;
	display: inline-block;
	align-items: center;
	font-size: 2rem;
	font-weight: 900;
	text-decoration: none;
	color: var(--app-text);
	span,
	svg {
		vertical-align: middle;
	}
	span {
		padding-left: 0.5rem;
	}
`;

const SVG = styled.svg`
	background: transparent;
	fill: currentColor;
`;

const BlinkingEmoji = styled.div`
padding-right: 10px;
  animation: blink 1s linear infinite;
  
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const LogoIcon = () => {
	return (
		<SVG
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 100 100"
		>
			<path d="M50 7C29.554 7 13 23.554 13 44v3c0 3.217 1.358 5.972 3.219 7.875C18.079 56.778 20.417 58 23 58h8v13c0 2.652-1.59 4-4 4-1.284 0-2.549-.911-3.344-2.406a3.006 3.006 0 1 0-5.312 2.812C19.954 78.436 23.057 81 27 81c5.345 0 10-4.342 10-10V58h4v23c0 2.652-1.59 4-4 4-1.153 0-2.234-.463-2.844-1.094a3 3 0 1 0-4.312 4.156C31.749 90.031 34.367 91 37 91c5.345 0 10-4.342 10-10V58h6v23c0 5.658 4.655 10 10 10 2.633 0 5.251-.969 7.156-2.938a3 3 0 1 0-4.312-4.156C65.234 84.536 64.154 85 63 85c-2.41 0-4-1.348-4-4V58h4v13c0 5.658 4.655 10 10 10 3.943 0 7.046-2.564 8.656-5.594a3.006 3.006 0 1 0-5.312-2.812C75.549 74.089 74.284 75 73 75c-2.41 0-4-1.348-4-4V58h8c2.583 0 4.92-1.222 6.781-3.125A11.265 11.265 0 0 0 87 47v-3C87 23.554 70.446 7 50 7zm0 6c17.226 0 31 13.774 31 31v3c0 1.533-.642 2.747-1.531 3.656C78.579 51.566 77.417 52 77 52H23c-.417 0-1.58-.434-2.469-1.344C19.642 49.746 19 48.533 19 47v-3c0-17.226 13.774-31 31-31zM40 33c-4.38 0-8 3.62-8 8a3 3 0 1 0 6 0c0-1.16.84-2 2-2 1.16 0 2 .84 2 2a3 3 0 1 0 6 0c0-4.38-3.62-8-8-8zm20 0c-4.38 0-8 3.62-8 8a3 3 0 1 0 6 0c0-1.16.84-2 2-2 1.16 0 2 .84 2 2a3 3 0 1 0 6 0c0-4.38-3.62-8-8-8z" />
		</SVG>
	);
};

const Navbar = React.memo(() => {
	const [isAtTop, setIsAtTop] = useState(true);
	const offsetLimit = 20;
	const checkIsAtTop = useCallback(
		() => {
			isAtTop === true && setIsAtTop(false);
			window.pageYOffset <= offsetLimit && setIsAtTop(true);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);
	useEffect(() => {
		window.addEventListener("scroll", checkIsAtTop);
		return () => window.removeEventListener("scroll", checkIsAtTop);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAtTop]);
	return (
		// @ts-ignore
		<Nav blur={isAtTop}>
			<LogoContainer href="/" className="animate-icon">
				<LogoIcon />
				<span>Sqwid</span>
			</LogoContainer>
		<div style={{fontWeight:'lighter',color:'yellow',display:'flex'}}><BlinkingEmoji>🚨 </BlinkingEmoji>Marketplace currently down for maintenance</div>	
		</Nav>
	);
});

export default Navbar;
