import styled from 'styled-components'

export const BodyTip = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 3rem;

	h3 {
		color: var(--success);
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	p {
		color: var(--fontColorGray);
		font-weight: var(--fontWeightRegular);
		line-height: 1.3rem;
		text-align: center;
		font-style: italic;
		height: auto;
		font-size: var(--fontSizeNormal);
	}
`
