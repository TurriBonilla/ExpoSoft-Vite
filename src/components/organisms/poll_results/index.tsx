import { Title } from 'components/atoms'
import { style } from './style'
const { Container, Graphic } = style

const Results = [20, 5, 30, 15, 10, 3, 2, 15]

const PollResults = () => {
    return (
        <Container>
            <Title title='Resultados de tu encuesta' />
            <Graphic results={Results}></Graphic>
        </Container>
    );
};

export default PollResults;