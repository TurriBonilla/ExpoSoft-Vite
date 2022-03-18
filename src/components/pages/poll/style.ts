import styled from 'styled-components'
import { IsActiveInterface } from 'interfaces'

export const Container = styled.section``

export const Header = styled.header`
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
`

export const WrapperForm = styled.div`
  /* border: 1px solid red; */
  min-height: calc(100vh - (8.5rem + 1px));
  display: grid;
  grid-template-columns: 1fr 0.5fr;
`

export const Modules = styled.div`
  /* border: 1px solid blue; */
`

export const NumberModule = styled.div<IsActiveInterface>`
  min-width: 40px;
  min-height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  background-color: ${({ isActive }) => (isActive ? 'var(--success)' : 'var(--hover)')};
  color: ${({ isActive }) => (isActive ? 'var(--whiteColor)' : 'var(--primaryColor)')};

  @media screen and (max-width: 1100px) {
    min-height: 30px;
    min-width: 30px;
  }
`

export const ActiveModule = styled.div`
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
`
