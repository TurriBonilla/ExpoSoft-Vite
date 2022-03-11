import { Title } from 'components/atoms'
import { QuestionOfPoll } from 'components/organisms'
import { dataPoll } from 'const'
import { useState } from 'react'

import {
	Container,
	Header,
	WrapperForm,
	Modules,
	ActiveModule,
	NumberModule,
} from './style'

const findBykey = (array: Array<any>, keyToSearch: number) => {
	return array.find((data: any, key: number) => key === keyToSearch)
}

const initialModuleKey = 0

const initialModule = findBykey(dataPoll, initialModuleKey)

const Poll = () => {
	const [keyModule, setkeyModule] = useState<number>(initialModuleKey)
	const [module, setModule] = useState<any>(initialModule)

	return (
		<Container>
			<Header>
				<p>Necessary survey to calculate your export level</p>
				<Title title='Calculate your export level' />
			</Header>
			<WrapperForm>
				<div>
					{module.questions.map((data: any, key: number) => (
						<QuestionOfPoll
							title={data.question}
							options={data.options}
							moduleId={module.id}
						/>
					))}
				</div>
				<Modules>
					{dataPoll.map((data: any, key: number) => (
						<ActiveModule
							key={key}
							onClick={() => {
								setkeyModule(key)
								setModule(data)
							}}
						>
							<NumberModule isActive={keyModule === key}>
								{key + 1}
							</NumberModule>
							{data.module}
						</ActiveModule>
					))}
				</Modules>
			</WrapperForm>
		</Container>
	)
}

export default Poll
