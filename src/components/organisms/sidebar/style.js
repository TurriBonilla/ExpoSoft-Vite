import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrapperLinks = styled.div`
  height: calc(100vh - 130px);
  display: flex;
  width: 25%;
  max-width: 15rem;
  flex-direction: column;
  position: absolute;
  transition: var(--transition);
  padding: 0 1rem;
  justify-content: center;

  @media screen and (max-width: 900px) {
    transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
    width: 70%;
  }
`

const LinkItem = styled(NavLink)`
  color: var(--fontColorGray);
  padding: 0.8rem 1rem;
  ${FlexCenter};
  justify-content: flex-start;
  gap: 0.5rem;
  font-size: var(--fontSizeNormal);
  border-radius: 0.5rem;
  margin: 0.5rem 0;

  &:hover {
    background-color: var(--primaryHover);
    color: var(--whiteColor);
    svg {
      fill: var(--whiteColor);
      transition: none;
    }
  }

  svg {
    fill: var(--fontColorGray);
    font-size: 1.25rem;
  }

  &.active {
    background: linear-gradient(to left, #464c5a, #333844);
    color: var(--whiteColor);
    svg {
      fill: var(--success);
    }
  }
`

export const style = {
  WrapperLinks,
  LinkItem
}
