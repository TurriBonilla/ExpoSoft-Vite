import { Tip } from 'components/atoms'
import { PollResults, ResultModule } from 'components/organisms'
import { dataPoll } from 'const'
import { ContainerDashboard, Wrapper } from './style'

const Dashboard = () => {
	return (
		<ContainerDashboard>
			<Wrapper>
				<Tip />
			</Wrapper>
			<Wrapper>
				<PollResults />
			</Wrapper>
			<Wrapper className='result-modules'>
				{dataPoll.map((data: any, key: number) => (
					<ResultModule title={data.module} key={key} />
				))}
			</Wrapper>
		</ContainerDashboard>
	)
}

export default Dashboard
