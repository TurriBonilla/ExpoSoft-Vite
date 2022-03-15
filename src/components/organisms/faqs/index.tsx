import { Faq } from 'components/molecules'
import { WrapperFaqs } from './style'
import { dataFaqs } from 'const'
import { useState } from 'react'
import { Title } from 'components/atoms'
import { FaqsProps } from 'interfaces'

const Faqs = () => {
	const [state, setState] = useState<number>(0)
	return (
		<>
			<WrapperFaqs>hola</WrapperFaqs>
			<WrapperFaqs>
				<Title>Frequently FAQs</Title>
				{dataFaqs.map((data: FaqsProps, key: number) => (
					<div onClick={() => setState(key === state ? -1 : key)}>
						<Faq
							key={key}
							faq={data.faq}
							body={data.body}
							show={state === key}
						/>
					</div>
				))}
			</WrapperFaqs>
		</>
	)
}

export default Faqs
