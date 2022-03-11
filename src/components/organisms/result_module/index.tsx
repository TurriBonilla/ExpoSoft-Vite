import { Title } from 'components/atoms'
import { IResultModule } from 'interfaces'
import { style } from './style'

const { Container } = style

const ResultModule = (props: IResultModule) => {
	const { title } = props
	return (
		<Container>
			<Title title={title} />
			<p>23.45%</p>
		</Container>
	)
}

export default ResultModule
