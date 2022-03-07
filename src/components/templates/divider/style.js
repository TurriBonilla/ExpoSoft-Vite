import styled, { css } from 'styled-components'

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrapperBody = styled.div`
  min-height: 100vh;
  display: flex;
`

const WrapperForm = styled.div`
  width: 40%;
  background-color: var(--secondaryColor);
  ${FlexCenter};
  flex-direction: column;
  position: relative;
  z-index: 1;

  .hidden {
    display: none;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: space-evenly;
    .hidden {
      display: flex;
    }
  }
`

const WrapperBrand = styled.div`
  width: 60%;
  ${FlexCenter};
  @media screen and (max-width: 900px) {
    display: none;
  }
`

const Form = styled.form`
  width: 75%;
  ${FlexCenter};
  flex-direction: column;
  gap: 0.25rem;
  z-index: 1;

  h3 {
    font-size: 1.5rem;
  }
  
  @media screen and (max-width: 900px) {
    width: 65%;
  }
`

const Copyright = styled.footer`
  position: absolute;
  bottom: 0.5rem;
  font-size: var(--fontSizeSmall);
  color: var(--grayColor);
`

const ContainerMap = styled.div`
  width: 100%;
  height: 100%;
  ${FlexCenter};
  img {
    width: 100%;
    opacity: 0.7;
  }

  @media screen and (max-width: 900px) {
    height: 100%;
    width: 200%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    img {
      opacity: 0.25;
    }
  }
`

export const style = {
  WrapperBody,
  WrapperBrand,
  WrapperForm,
  Form,
  Copyright,
  ContainerMap
}
