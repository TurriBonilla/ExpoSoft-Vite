import styled from 'styled-components'

export const Style = styled.button`
  font-size: 1rem;
  color: var(--secondaryColor);
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: var(--borderRadius);
  border: none;
  cursor: pointer;

  ${({ typeButton }) =>
    typeButton === 'primary' &&
    `
background-color: var(--primary);
&:hover {
    background-color: var(--primaryHover);
}
`}
`
