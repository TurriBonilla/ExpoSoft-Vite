import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WrapperLabelAndInput = styled.div`
  width: 100%;
`

export const Label = styled.label`
  font-size: var(--fontSizeNormal);
  font-weight: 500;
`

export const TextRegister = styled.p`
  color: var(--grayColor);
  font-size: var(--fontSizeSmall);
`

export const LinkRegister = styled(Link)`
  font-size: var(--fontSizeSmall);
  color: var(--primary);

  &:hover {
    color: var(--primaryHover);
    text-decoration: underline;
  }
`
