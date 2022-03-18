import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const CardContainer = styled.div`
  height: calc(30% - 0.5rem);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

export const InfoContainer = styled.div`
  height: calc(70% - 0.5rem);
  border-radius: var(--borderRadiusGeneral);
  background: var(--whiteColor);
  box-shadow: 0px 0px 70px -50px rgba(181, 181, 181, 1);
  display: grid;
  align-items: center;
  justify-items: flex-end;
  grid-template-columns: 1.5fr 1fr;
  padding: 1rem;
  color: var(--fontColorGray);

  img {
    width: 90%;
    object-fit: contain;
    opacity: 0.7;
  }
`
