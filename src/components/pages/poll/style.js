import styled from "styled-components";

const Container = styled.section`
`;

const Header = styled.header`
border-bottom: 2px solid var(--fontColorPlaceholder);
padding: 0.5rem 0;
margin-bottom: 0.5rem;

p {
    color: var(--fontColorPlaceholder);
    font-size: var(--fontSizeSmall);
}

h3 {
    color: var(--success);
    font-size: 1.75rem;
    font-weight: 600;
}
`;

const WrapperForm = styled.div`
border: 1px solid red;
height: calc(100vh - 8.5rem);
display: grid;
grid-template-columns: 1fr 0.5fr;
`;

const Modules = styled.div`
border: 1px solid blue;
`;

const NumberModule = styled.div`
min-width: 2vw;
min-height: 2vw;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 0.5rem;
background-color: ${({ isActive }) => isActive ? 'var(--success)' : 'var(--hover)'};
color: ${({ isActive }) => isActive ? 'var(--whiteColor)' : 'var(--primaryColor)'};
`;

const ActiveModule = styled.div`
padding: 0.5rem;
cursor: pointer;
margin: 0 0.5rem;
display: flex;
align-items: center;
transition: var(--transition);

&:not(:first-child) {
    margin-top: 1rem;
}

&:hover {
    ${NumberModule} {
        transition: var(--transition);
        background-color: var(--success);
        color: var(--whiteColor);
    }
}
`;

export const style = {
    Container,
    Header,
    WrapperForm,
    Modules,
    ActiveModule,
    NumberModule
}