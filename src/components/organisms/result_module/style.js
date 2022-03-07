import styled from "styled-components";

const Container = styled.div`
padding: 0.5rem;
background-color: var(--secondaryColor);
border-radius: var(--borderRadiusGeneral);

h3 {
    border-bottom: 2px solid var(--active);
    font-size: 1rem;
    color: var(--success);
    text-align: center;
}

p {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color: var(--primaryColor);
    padding: 20% 0;
}
`;

export const style = {
    Container
}