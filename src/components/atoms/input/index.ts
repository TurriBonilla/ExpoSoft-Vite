import { InputFormikProps } from 'interfaces'
import styled from 'styled-components'

const Input = styled.input<InputFormikProps>`
  height: 1.5rem;
  width: 100%;
  font-size: var(--fontSizeNormal);
  caret-color: var(--tertiaryColor);
  background: none;
  margin: 0.25rem 0;
  padding: 1.25rem 1rem;
  border-radius: var(--borderRadius);
  ${({ error }) =>
    error
      ? `
    border: 1px solid var(--alert);

    &:focus {
      outline: 2px solid var(--alert);
    }`
      : `
    border: 1px solid var(--grayColor);

    &:focus {
      outline: 2px solid var(--success);
    }`};

  &::placeholder {
    color: var(--fontColorPlaceholder);
  }

  @media screen and (max-width: 1366px) {
    font-size: var(--fontSizeSmall);
  }
`

export default Input
