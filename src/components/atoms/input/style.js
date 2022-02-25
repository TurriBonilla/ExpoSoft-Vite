import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid var(--grayColor);
  height: 1.5rem;
  width: 100%;
  font-size: var(--fontSizeNormal);
  caret-color: var(--tertiaryColor);
  background: none;
  margin: 0.25rem 0;
  padding: 1.25rem 1rem;
  border-radius: var(--borderRadius);

  &::placeholder {
    color: var(--fontColorPlaceholder);
  }
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: var(--fontSizeSmall);
  }
`

export const style = {
  Input
}
