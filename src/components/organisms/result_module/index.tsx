import { Title } from 'components/atoms'
import { IResultModule } from 'interfaces'
import { Container } from './style'

const ResultModule = (props: IResultModule) => {
	const { title } = props
	return (
		<Container>
			<Title>{title}</Title>
			<p>23.45%</p>
		</Container>
	)
}

export default ResultModule
