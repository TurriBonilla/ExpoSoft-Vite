import styled from 'styled-components'
import { Link } from 'react-router-dom'

const WrapperLabelAndInput = styled.div`
	width: 100%;
`

const Label = styled.label`
	font-size: var(--fontSizeNormal);
	font-weight: 500;
`

const TextRegister = styled.p`
	color: var(--grayColor);
	font-size: var(--fontSizeSmall);
`

const LinkRegister = styled(Link)`
	font-size: var(--fontSizeSmall);
	color: var(--primary);

	&:hover {
		color: var(--primaryHover);
		text-decoration: underline;
	}
`

export const style = {
	WrapperLabelAndInput,
	Label,
	TextRegister,
	LinkRegister
}
