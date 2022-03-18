import { IsActiveInterface } from 'interfaces'
import styled from 'styled-components'

export const WrapperCard = styled.button<IsActiveInterface>`
  height: 100%;
  ${({ isActive }) => (isActive ? 'background-color: #eaeaea; border: 2px solid white;' : 'background-color: var(--whiteColor); border: 2px solid transparent;')};

  box-shadow: 0px 0px 70px -50px rgba(181, 181, 181, 1);
  border-radius: var(--borderRadiusGeneral);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background: #eaeaea;
  }

  svg {
    font-size: 4rem;
    color: ${({ isActive }) => (isActive ? 'var(--success);' : 'var(--fontColorGray);')};
  }
`

export const Title = styled.div<IsActiveInterface>`
  font-size: var(--fontSizeTitle);
  font-weight: ${({ isActive }) => (isActive ? 'var(--fontWeightSemiBold);' : 'var(--fontWeightLight);')};
`
