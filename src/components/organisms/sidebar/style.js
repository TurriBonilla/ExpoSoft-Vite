import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrapperLinks = styled.div`
height: calc(100% - 60px);
width: 100%;
min-width: 15rem;
${FlexCenter};
flex-direction: column;
position: absolute;
top: 60px;
background-color: var(--primaryColor);

@media screen and (max-width: 900px) {
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
  height: calc(100vh - 60px);
  width: 30%;
}
`

const LinkItem = styled(NavLink)`
width: calc(100% - 2rem);
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

const WraperProfile = styled.div`
  position: sticky;
  top: 100%;
  color: white;
  height: 60px;
  width: calc(100% - 2rem);
  display: grid;
  align-items: center;
  border-top: 1px solid #797b7f45;
  grid-template-columns: 2rem 1fr;
  gap: 0.8rem;

  @media screen and (max-width: 900px) {
    transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
  }
`

const WrapperImageProfile = styled.div`
  width: 2rem;
  height: 2rem;
  background: white;
  ${FlexCenter}
  border-radius: 0.5rem;
  padding: 0.35rem;
  color: var(--primaryColor);
  font-weight: var(--fontWeightBold);
`

const WrapperInformation = styled.div`
  p {
    width: calc(100% - 3rem);
    font-size: var(--fontSizeNormal);
    font-weight: var(--fontWeightLight);
    color: var(--success);
  }
  .emailBusiness {
    font-size: var(--fontSizeSmall);
    color: var(--fontColorGray);
  }
`

export const style = {
  WrapperLinks,
  LinkItem,
  WraperProfile,
  WrapperImageProfile,
  WrapperInformation
}
