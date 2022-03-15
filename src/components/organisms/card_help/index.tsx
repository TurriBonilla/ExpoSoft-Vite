import { CardHelpProps } from 'interfaces'
import { WrapperCard, Title } from './style'

const CardHelp = (props: CardHelpProps) => {
	const { title, icon, isActive, onClick } = props
	return (
		<WrapperCard onClick={onClick} isActive={isActive}>
			{icon}
			<Title isActive={isActive}>{title}</Title>
		</WrapperCard>
	)
}

export default CardHelp
