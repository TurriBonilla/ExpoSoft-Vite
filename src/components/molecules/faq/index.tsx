import { WrapperFaq, WrapperHeader } from './style'
import { MdAdd, MdRemove } from 'react-icons/md'
import { Title } from 'components/atoms'
import { FaqInterface} from 'interfaces'

const Faq = (props: FaqInterface) => {
	const { faq, body, show } = props

	return (
		<WrapperFaq>
			<WrapperHeader isActive={show}>
				<Title>{faq}</Title>
				{show ? <MdRemove /> : <MdAdd />}
			</WrapperHeader>
			{show && <p>{body}</p>}
		</WrapperFaq>
	)
}

export default Faq
