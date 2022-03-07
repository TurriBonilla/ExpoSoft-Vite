import styled, { css } from 'styled-components'

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.main`
display: grid;
grid-template-columns: minmax(15rem, 0.325fr) 2fr;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const HeaderMenu = styled.section`
  width: 100%;
  height: calc(100vh - 0.8rem);
  flex-direction: column;
  position: relative;
  margin-top: 0.8rem;

  @media screen and (max-width: 900px) {
    height: 60px;
    margin-top: 0;
  }
`

const WrapperMenu = styled.section`
  ${FlexCenter};
  padding-left: 1rem;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  
  .ContainerBrand {
    display: flex;
    align-items: center;
    width: 100%;

    h1 {
      color: white;
      margin-left: 15%;
    }
  }
  
  @media screen and (max-width: 900px) {
    justify-content: space-between;
    padding-right: 0.5%;

    .ContainerBrand {
      h1 {
        color: white;
        margin: 0 auto;
      }
    }
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
  width: calc(100% - 1rem);
  height: calc(100vh - 1rem);
  margin: 0.5rem;
  padding: 1rem;
  border-radius: var(--borderRadiusGeneral);
  background: var(--secondaryColor);

  @media screen and (max-width: 900px) {
    height: calc(100vh - calc(1rem + 60px));
  }
`

export const style = {
  Container,
  HeaderMenu,
  WrapperMenu,
  WrapperIconBars,
  WrapperOutlet
}
