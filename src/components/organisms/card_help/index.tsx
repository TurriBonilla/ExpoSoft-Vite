import { CardHelpProps } from 'interfaces'
import { style } from './style'

const CardHelp = (props: CardHelpProps) => {
  const { title, icon, isActive, onClick } = props
  return (
    <style.WrapperCard onClick={onClick} isActive={isActive}>
      {icon}
      <style.Title isActive={isActive}>{title}</style.Title>
    </style.WrapperCard>
  )
}

export default CardHelp
