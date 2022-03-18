import styled from 'styled-components'

export const WrapperItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  gap: 0 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export const WrapperLabelAndInput = styled.div`
  width: 100%;
`

export const TextRegister = styled.p`
  color: var(--grayColor);
  font-size: var(--fontSizeSmall);
  text-align: center;
`