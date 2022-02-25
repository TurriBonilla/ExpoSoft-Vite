import { CardHelp, HelpInformation } from 'components/organisms'
import { dataCardHelp } from 'const'
import { useState } from 'react'
import { handleOption } from './Help'
import { style } from './style'

const Help = () => {
  const [optionHelp, setOptionHelp] = useState<number>(0)
  return (
    <>
      <style.CardContainer>
        {dataCardHelp.map((card, key) => (
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
        {optionHelp === 0 && <HelpInformation />}
      </style.InfoContainer>
    </>
  )
}

export default Help
