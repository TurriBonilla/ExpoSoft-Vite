import styled from 'styled-components'

export const Container = styled.section`
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
`

interface GraphicProps {
  data: number[]
}

export const Graphic = styled.div<GraphicProps>`
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  margin-right: 1rem;
  ${({ data }) =>
    data &&
    `
		background-image: conic-gradient(
			red ${data[0]}%,
			blue ${data[0]}% ${data[0] + data[1]}%,
			pink ${data[0] + data[1]}% ${data[0] + data[1] + data[2]}%,
			green ${data[0] + data[1] + data[2]}% ${data[0] + data[1] + data[2] + data[3]}%,
			yellow ${data[0] + data[1] + data[2] + data[3]}% ${data[0] + data[1] + data[2] + data[3] + data[4]}%,
			violet ${data[0] + data[1] + data[2] + data[3] + data[4]}% ${data[0] + data[1] + data[2] + data[3] + data[4] + data[5]}%,
			gray ${data[0] + data[1] + data[2] + data[3] + data[4] + data[5]}% ${data[0] + data[1] + data[2] + data[3] + data[4] + data[5] + data[6]}%,
			purple ${data[0] + data[1] + data[2] + data[3] + data[4] + data[5] + data[6]}% ${data[0] + data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]}%
		);
	`}
`
