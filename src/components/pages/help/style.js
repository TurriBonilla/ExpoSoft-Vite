import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

const InfoContainer = styled.div`
  margin-top: 1rem;
  border-radius: var(--borderRadiusGeneral);
  height: calc(100vh - 15rem);
  background: var(--whiteColor);
  box-shadow: 0px 0px 70px -50px rgba(181, 181, 181, 1);
  padding: 2rem 0 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--fontColorGray);
  justify-items: center;
  place-content: center;
  align-items: center;
  div {
    h3 {
      font-size: var(--fontSizeBrand);
      margin-bottom: 1rem;
      color: var(--success);
    }
  }
  p {
    height: fit-content;
  }
`

export const style = {
  CardContainer,
  InfoContainer
}
