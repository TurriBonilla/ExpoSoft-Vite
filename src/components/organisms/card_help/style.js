import styled from 'styled-components'

const WrapperCard = styled.div`
  height: 11rem;
  ${({ isActive }) =>
    isActive
      ? 'background-color: #eaeaea; border: 2px solid white;'
      : 'background-color: var(--whiteColor); border: 2px solid transparent;'};

  box-shadow: 0px 0px 70px -50px rgba(181, 181, 181, 1);
  border-radius: var(--borderRadiusGeneral);
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }
`

const SectionTop = styled.section`
  height: 50%;
  display: flex;
  justify-content: center;

  svg {
    font-size: 4rem;
    color: ${({ isActive }) =>
      isActive ? 'var(--success);' : 'var(--fontColorGray);'};
  }
`

const SectionBottom = styled.section`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ isActive }) =>
    isActive ? 'var(--primaryColor);' : 'var(--fontColorGray);'};
`

const Title = styled.div`
  font-size: var(--fontSizeTitle);
  font-weight: ${({ isActive }) =>
    isActive ? 'var(--fontWeightSemiBold);' : 'var(--fontWeightLight);'};
`

const WrapperText = styled.div`
  font-size: var(--fontSizeSmall);
`

export const style = {
  WrapperCard,
  SectionTop,
  SectionBottom,
  Title,
  WrapperText
}
