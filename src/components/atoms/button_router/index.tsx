import { ColorInterface } from 'interfaces'
import styled from 'styled-components'

const ButtonRouter = styled.button<ColorInterface>`
	font-size: 1rem;
	color: var(--secondaryColor);
	/* width: fit-content; */
	width: 100%;
	text-align: center;
	padding: 0.5rem 1rem;
	margin: 0.5rem 0;
	border-radius: var(--borderRadius);

	${({ color }) =>
		color === 'primary' &&
		`
			background-color: var(--primary);
			&:hover {
				background-color: var(--primaryHover);
			}
	`}
`

export default ButtonRouter
