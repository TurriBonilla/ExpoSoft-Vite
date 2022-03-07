import { Title } from 'components/atoms';
import { QuestionOfPoll } from 'components/organisms';
import { dataPoll } from 'const';
import { useState } from 'react';
import { style } from './style'
const { Container, Header, WrapperForm, Modules, ActiveModule, NumberModule } = style

const Poll = () => {
  const [module, setModule] = useState(0)
  return (
    <Container>
      <Header>
        <p>Necessary survey to calculate your export level</p>
        <Title title='Calculate your export level' />
      </Header>
      <WrapperForm>
        <div>
          <QuestionOfPoll />
        </div>
        <Modules>
          {dataPoll.map((data: object, key: number) => (
            <ActiveModule key={key} onClick={() => setModule(key)}>
              <NumberModule isActive={module === key}>{key + 1}</NumberModule>
              {data}
            </ActiveModule>
          ))}
        </Modules>
      </WrapperForm>
    </Container>
  );
};

export default Poll
