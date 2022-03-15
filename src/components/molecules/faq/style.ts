import { IsActiveInterface } from 'interfaces'
import styled from 'styled-components'

export const WrapperFaq = styled.div`
	border-bottom: 2px solid var(--hover);

	p {
		grid-column: 1 / 3;
		font-size: var(--fontSizeSmall);
		color: var(--grayColor);
		margin: 0.5rem 0;
	}
`
export const WrapperHeader = styled.div<IsActiveInterface>`
	display: grid;
	grid-template-columns: 1fr 0.04fr;
	padding: 0.5rem 0;

	svg {
		cursor: pointer;
		fill: ${({ isActive }) =>
			isActive ? 'var(--success)' : 'var(--active)'};
		font-size: 1.5rem;
	}

	h3 {
		cursor: pointer;
		color: ${({ isActive }) =>
			isActive
				? 'var(--success) !important'
				: 'var(--active) !important'};
		font-weight: 600;
		font-size: 1rem;
		margin-bottom: 0 !important;
	}

	&:hover {
		svg {
			fill: var(--success);
		}

		h3 {
			color: var(--success);
		}
	}
`
