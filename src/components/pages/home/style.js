import styled, { css } from 'styled-components'

const FlexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Container = styled.main`
	display: grid;
	grid-template-columns: minmax(15rem, 0.325fr) 2fr;

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`

const HeaderMenu = styled.section`
	/* width: 100%; */
	height: calc(100vh - 0.8rem);
	flex-direction: column;
	/* position: relative; */
	position: fixed;
	width: 16rem;
	margin-top: 0.8rem;

	@media screen and (max-width: 900px) {
		height: 60px;
		margin-top: 0;
		width: 100%;
		background-color: var(--primaryColor);
	}
`

const WrapperMenu = styled.section`
	${FlexCenter};
	padding-left: 1rem;
	justify-content: flex-start;
	width: 100%;
	height: 60px;
	position: absolute;
	top: 0;
	
	.ContainerBrand {
		display: flex;
		align-items: center;
		width: 100%;

		h1 {
		color: white;
		margin-left: 15%;
		}
	}
	
	@media screen and (max-width: 900px) {
		justify-content: space-between;
		padding-right: 0.5%;

		.ContainerBrand {
		h1 {
			color: white;
			margin: 0 auto;
		}
		}
	}
`

const WrapperIconBars = styled.div`
	width: fit-content;
	${FlexCenter};
	padding: 0.5rem;
	cursor: pointer;
	display: none;

	svg {
		fill: var(--secondaryColor);
		font-size: 1.5rem;
		margin-bottom: -0.4rem;
	}

	@media screen and (max-width: 900px) {
		display: block;
	}
`

const WrapperOutlet = styled.main`
	/* width: calc(100% - 1rem); */
	width: calc(100vw - 17.25rem);
	min-height: calc(100vh - 1rem);
	margin: 0.5rem 0.5rem 0.5rem 16.5rem;
	padding: 1rem;
	border-radius: var(--borderRadiusGeneral);
	background: var(--secondaryColor);

	@media screen and (max-width: 900px) {
		/* height: calc(100vh - calc(1rem + 60px)); */
		margin-top: calc(60px + 0.5rem);
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
		width: calc(100% - 1rem);
	}
`

export const style = {
	Container,
	HeaderMenu,
	WrapperMenu,
	WrapperIconBars,
	WrapperOutlet
}
