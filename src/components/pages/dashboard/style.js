import styled from "styled-components";

const ContainerDashboard = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1.5fr 2fr;
gap: 1rem;
height: 100%;

.result-modules {
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
}
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
background-color: var(--whiteColor);
border-radius: var(--borderRadiusGeneral);
padding: 1rem;
`;

export const style = {
    ContainerDashboard,
    Wrapper
}