import { CardHelp, Faqs, HelpInformation } from 'components/organisms'
import { dataCardHelp } from 'const'
import { CardHelpProps } from 'interfaces'
import { useState } from 'react'
import { handleOption } from './Help'
import { style } from './style'

const Help = () => {
  const [optionHelp, setOptionHelp] = useState<number>(0)
  return (
    <style.Wrapper>
      <style.CardContainer>
        {dataCardHelp.map((card: CardHelpProps, key: number) => (
          <CardHelp
            key={key}
            title={card.title}
            icon={card.icon}
            isActive={key === optionHelp}
            onClick={() => setOptionHelp(handleOption(key))}
          />
        ))}
      </style.CardContainer>
      <style.InfoContainer>
        {optionHelp === 0 ? <HelpInformation /> : optionHelp === 1 && <Faqs />}
      </style.InfoContainer>
    </style.Wrapper>
  )
}

export default Help
