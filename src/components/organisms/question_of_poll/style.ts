import styled from 'styled-components'

export const WrapperQuestion = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: var(--whiteColor);
  border-radius: var(--borderRadiusGeneral);

  span {
    color: var(--primaryColor);
    font-size: calc(var(--fontSizeNormal) + 0.15rem);
    font-weight: var(--fontWeightBold);
  }
`
interface IsSelectedInterface {
  isSelected: boolean
}

export const Answer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;

  label {
    font-size: var(--fontSizeNormal);
    color: var(--fontColorGray);
  }

  svg {
    fill: ${({ isSelected }: IsSelectedInterface) => (isSelected ? 'var(--success)' : 'var(--fontColorGray)')};
    font-size: var(--fontSizeTitle);
    margin-right: 0.25rem;
  }
`
