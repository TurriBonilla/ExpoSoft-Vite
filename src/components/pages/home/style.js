import styled, { css } from 'styled-components'

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.main`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

const HeaderMenu = styled.section`
  width: 25%;
  max-width: 15rem;
  height: 60px;

  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
`

const WrapperMenu = styled.section`
  ${FlexCenter};
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 1rem;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    padding-right: 0.5%;
    align-items: center;
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
  width: calc(100% - 15rem);
  height: calc(100vh - 1rem);
  background: var(--secondaryColor);
  border-radius: var(--borderRadiusGeneral);
  margin: 0.5rem;
  padding: 1rem;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const WraperProfile = styled.div`
  position: absolute;
  bottom: 0.5rem;
  color: white;
  height: 60px;
  width: 25%;
  max-width: 13rem;
  display: grid;
  align-items: center;
  border-top: 1px solid #797b7f45;
  margin: 0 1rem;
  grid-template-columns: 2rem 1fr;
  gap: 0.8rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
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
  Container,
  HeaderMenu,
  WrapperMenu,
  WrapperIconBars,
  WrapperOutlet,
  WraperProfile,
  WrapperImageProfile,
  WrapperInformation
}
