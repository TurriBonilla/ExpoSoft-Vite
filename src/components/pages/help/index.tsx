import { CardHelp, Faqs, HelpInformation } from 'components/organisms'
import { dataCardHelp } from 'const'
import { DataCardHelpProps } from 'interfaces'
import { useState } from 'react'
import { handleOption } from './Help'
import { Wrapper, CardContainer, InfoContainer } from './style'

const Help = () => {
  const [optionHelp, setOptionHelp] = useState<number>(0)
  return (
    <Wrapper>
      <CardContainer>
        {dataCardHelp.map((card: DataCardHelpProps, key: number) => (
          <CardHelp key={key} title={card.title} icon={card.icon} isActive={key === optionHelp} onClick={() => setOptionHelp(handleOption(key))} />
        ))}
      </CardContainer>
      <InfoContainer>{optionHelp === 0 ? <HelpInformation /> : optionHelp === 1 && <Faqs />}</InfoContainer>
    </Wrapper>
  )
}

export default Help
