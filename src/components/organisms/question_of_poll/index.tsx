import { useState } from 'react'

import { style } from './style'
import {
	MdOutlineRadioButtonUnchecked,
	MdOutlineRadioButtonChecked,
} from 'react-icons/md'

const { WrapperQuestion, Answer } = style

interface QuestionOfPollProps {
	title: string
	options: Array<any>
	moduleId: string
}

const QuestionOfPoll = (props: QuestionOfPollProps) => {
	const { title, options, moduleId } = props
	const [select, setSelect] = useState<string>("")

	return (
		<WrapperQuestion>
			<span>{title}</span>
			{options.map((data: any, key: number) => (
				<Answer
					key={`${moduleId}-${key}`}
					onClick={() => setSelect(`${moduleId}-${key}`)}
					isSelected={select === `${moduleId}-${key}` ? true : false}
				>
					{select === `${moduleId}-${key}` ? (
						<MdOutlineRadioButtonChecked />
					) : (
						<MdOutlineRadioButtonUnchecked />
					)}
					<label>{data.option}</label>
				</Answer>
			))}
		</WrapperQuestion>
	)
}

export default QuestionOfPoll
