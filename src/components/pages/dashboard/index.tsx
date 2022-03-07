import { Tip } from 'components/atoms';
import { PollResults, ResultModule } from 'components/organisms';
import { dataPoll } from 'const';
import { style } from './style'
const { ContainerDashboard, Wrapper } = style;

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
        {dataPoll.map((data: string, key: number) => (
          <ResultModule title={data} key={key} />
        ))}
      </Wrapper>
    </ContainerDashboard>
  )
}

export default Dashboard
