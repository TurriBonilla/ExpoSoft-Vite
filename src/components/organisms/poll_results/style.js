import styled from "styled-components";

const Container = styled.section`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

h3 {
    color: var(--success);
    font-size: 1.5rem;
    text-align: center;
}
`;

const Graphic = styled.div`
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    margin-right: 1rem;
    ${({ results }) => results && `
        background-image: conic-gradient(
            red ${results[0]}%,
            blue ${results[0]}% ${results[0] + results[1]}%,
            pink ${results[0] + results[1]}% ${results[0] + results[1] + results[2]}%,
            green ${results[0] + results[1] + results[2]}% ${results[0] + results[1] + results[2] + results[3]}%,
            yellow ${results[0] + results[1] + results[2] + results[3]}% ${results[0] + results[1] + results[2] + results[3] + results[4]}%,
            violet ${results[0] + results[1] + results[2] + results[3] + results[4]}% ${results[0] + results[1] + results[2] + results[3] + results[4] + results[5]}%,
            gray ${results[0] + results[1] + results[2] + results[3] + results[4] + results[5]}% ${results[0] + results[1] + results[2] + results[3] + results[4] + results[5] + results[6]}%,
            purple ${results[0] + results[1] + results[2] + results[3] + results[4] + results[5] + results[6]}% ${results[0] + results[1] + results[2] + results[3] + results[4] + results[5] + results[6] + results[7]}%
        );
    `}
`;

export const style = {
    Container,
    Graphic
}