import styled from "styled-components";

const WrapperQuestion = styled.div`
margin: 0.5rem;
padding: 0.5rem 0.75rem;
background-color: var(--whiteColor);
border-radius: var(--borderRadiusGeneral);

span {
    color: var(--primaryColor);
    font-size: calc(var(--fontSizeNormal) + 0.15rem);
    font-weight: var(--fontWeightBold);
}
`;

const Answer = styled.div`
display: flex;
align-items: center;
margin-top: 0.75rem;

label {
    font-size: var(--fontSizeNormal);
    color: var(--fontColorGray);
}

svg {
    fill: ${({ isSelected }) => isSelected ? 'var(--success)' : 'var(--fontColorGray)'};
    font-size: var(--fontSizeTitle);
    margin-right: 0.25rem;
}
`;

export const style = {
    WrapperQuestion,
    Answer
}