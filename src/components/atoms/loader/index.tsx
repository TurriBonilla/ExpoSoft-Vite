import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  color: white;
  gap: 1rem;
`

const Load = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(80, 139, 78, 0.5);
  transform-origin: top;
  display: grid;
  animation: colorful-3vgb5t 1.4s infinite linear;

  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    background: rgba(80, 139, 78, 0.75);
    border-radius: 50%;
    transform-origin: top;
    animation: inherit;
    animation-name: colorful-k94uub;
  }

  &::after {
    background: #508b4e;
    --s: 180deg;
  }

  @keyframes colorful-3vgb5t {
    0%,
    20% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes colorful-k94uub {
    50% {
      transform: rotate(var(--s, 90deg));
    }

    100% {
      transform: rotate(0);
    }
  }
`

const Loader = () => {
  return (
    <Center>
      <Load></Load>
      <span>Cargando</span>
    </Center>
  )
}

export default Loader
