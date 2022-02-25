import { CardHelpProps } from 'interfaces'
import { style } from './style'

const CardHelp = (props: CardHelpProps) => {
  const { title, icon, isActive, onClick } = props
  return (
    <style.WrapperCard onClick={onClick} isActive={isActive}>
      <style.SectionTop isActive={isActive}>{icon}</style.SectionTop>
      <style.SectionBottom isActive={isActive}>
        <style.Title isActive={isActive}>{title}</style.Title>
      </style.SectionBottom>
    </style.WrapperCard>
  )
}

export default CardHelp
