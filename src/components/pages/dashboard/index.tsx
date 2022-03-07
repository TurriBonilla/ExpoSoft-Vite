import { Tip } from 'components/atoms';
import { PollResults, ResultModule } from 'components/organisms';
import { style } from './style'
const { ContainerDashboard, Wrapper } = style;

const Data = [
  { module: 'modulo 1' },
  { module: 'modulo 2' },
  { module: 'modulo 3' },
  { module: 'modulo 4' },
  { module: 'modulo 5' },
  { module: 'modulo 6' },
  { module: 'modulo 7' },
  { module: 'modulo 8' },
]

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
        {Data.map((data, key) => (
          <ResultModule title={data.module} key={key} />
        ))}
      </Wrapper>
    </ContainerDashboard>
  )
}

export default Dashboard
