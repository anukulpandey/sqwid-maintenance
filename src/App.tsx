import styled, { css,keyframes } from "styled-components";
import Navbar from './Navbar';

const breakpoints = {
	xs: "480px",
	sm: "768px",
	md: "992px",
	lg: "1200px",
	xl: "1400px",
};


export const respondTo = Object.keys(breakpoints).reduce(
	(accumulator, label) => {
    // @ts-ignore
    (accumulator as any)[label] = (...args:any) => css`@media (max-width: ${breakpoints[label]}) {${css(...args)};
			}
		`;
		return accumulator;
	},
	{}
);

const bgGradientAnimation = keyframes`
	0%{
		background-size: 300%;
		background-position: 0%;
	}
	50%{
		background-size: 150%;
		background-position: 100%;
	}
	100%{
		background-size: 300%;
		background-position: 0%;
	}
`;

const Wrapper = styled.div`
	position: relative;
	height: 40rem;
	width: 100%;
	background: var(--app-banner-bg);
	background-repeat: repeat;
	display: flex;
	align-items: center;
	justify-content: space-around;
	line-height: 1.125;
	gap: 2rem;
	min-height: 100%;
	text-align: left;
	overflow: hidden;
	h1 {
		line-height: 1;
		font-weight: 900;
		font-size: 4rem;
		background: -webkit-linear-gradient(
			0deg,
			var(--app-text) 0%,
			#619feb 50%,
			var(--app-text) 100%
		);
		background-size: 300%;
		background-repeat: no-repeat;
		background-clip: text;
		-webkit-background-clip: text;
		width: 25rem;
		-webkit-text-fill-color: transparent;
		/* animation: ${bgGradientAnimation} 10s ease infinite; */
		user-select: none;
	}
	h2 {
		margin-top: 2rem;
		font-weight: 500;
		font-size: 1.125rem;
		width: 25rem;
		color: var(--app-container-text-primary-hover);
	}
	${(respondTo as any).md`
	    display: grid;
		padding-left: 0;
		background: var(--app-banner-bg-sm);
		h1{
			width: 100%;
			font-size: 3.5rem;
		}
		h2{
			font-size: 1.125rem;
			margin-right:0;
			width: 100%;
		}
	`}
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
    <Wrapper>
				<div style={{margin: "0 2rem"}}>
					<h1>An ocean of possibilities</h1>
					<h2>Sqwid seeks to create a safe and accessible environment, one in which artists can utilize the Reef blockchain to distribute their work in novel ways and forge closer bonds with their followers.</h2>
				</div>
			</Wrapper>
      </Wrapper>
  )
}

export default App