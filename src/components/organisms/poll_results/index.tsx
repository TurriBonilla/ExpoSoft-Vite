import { Title } from 'components/atoms'
import { Container, Graphic } from './style'

const Results = [20, 5, 30, 15, 10, 3, 2, 15]

const PollResults = () => {
	return (
		<Container>
			<Title>Resultados de tu encuesta</Title>
			<Graphic data={Results}></Graphic>
		</Container>
	)
}

export default PollResults
