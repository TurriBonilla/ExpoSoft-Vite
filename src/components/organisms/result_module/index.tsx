import { Title } from 'components/atoms'
import { ResultModuleInterface } from 'interfaces'
import { Container } from './style'

const ResultModule = (props: ResultModuleInterface) => {
  const { title } = props
  return (
    <Container>
      <Title>{title}</Title>
      <p>23.45%</p>
    </Container>
  )
}

export default ResultModule
