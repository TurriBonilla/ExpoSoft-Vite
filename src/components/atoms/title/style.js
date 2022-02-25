import styled from 'styled-components'

const Title = styled.h3`
color: var(--tertiaryColor);
font-size: ${({size}) => size && `${size}rem`};
`;

export const style = {
    Title
}