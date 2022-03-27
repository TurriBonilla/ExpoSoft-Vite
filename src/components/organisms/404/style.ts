import styled, { css } from "styled-components";

const CSS = css`
font-weight: var(--fontWeightBold);
width: fit-content;
`;

export const Allbody = styled.section`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Number404 = styled.span`
${CSS};
color: var(--success);
font-size: calc(var(--fontSizeBig) * 4);
line-height: calc(var(--fontSizeBig) * 3.5);
`;

export const NotFoundText = styled.span`
${CSS};
color: var(--fontColorPlaceholder);
font-size: calc(var(--fontSizeTitle) * 1.5);
line-height: calc(var(--fontSizeTitle) * 2.5);
letter-spacing: 2.5px;
word-spacing: 10px;
margin-bottom: 25px;
`;

export const SpanTitle = styled.span`
${CSS};
color: var(--secondaryColor);
font-size: calc(var(--fontSizeTitle) * 2);
line-height: calc(var(--fontSizeTitle) * 2.5);
margin-bottom: 10px;
`;

export const TextInfo = styled.p`
${CSS};
color: var(--fontColorPlaceholder);
font-size: calc(var(--fontSizeTitle) * 1);
line-height: calc(var(--fontSizeTitle) * 1.25);
word-spacing: 10px;
`;