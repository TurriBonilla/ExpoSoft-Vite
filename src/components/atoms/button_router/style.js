import styled from 'styled-components'

export const Button = styled.button`
  font-size: 1rem;
  color: var(--secondaryColor);
  /* width: fit-content; */
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: var(--borderRadius);

  ${({ type }) =>
    type === 'primary' &&
    `
background-color: var(--primary);
&:hover {
    background-color: var(--primaryHover);
}
`}
`
