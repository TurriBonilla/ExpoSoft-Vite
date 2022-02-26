import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logotipo = styled(Link)`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 2.6vw;
  height: 2.6vw;
  max-width: 2.5rem;
  max-height: 2.5rem;
  min-width: 2rem;
  min-height: 2rem;
  border: 1px solid white;

  svg {
    font-size: 1.3rem;
    fill: var(--primaryColor);
  }

  &:hover {
    background: var(--primaryColor);

    svg {
      fill: white;
    }
  }
`

export const style = {
  Logotipo
}
