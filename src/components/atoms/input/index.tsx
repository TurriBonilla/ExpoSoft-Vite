import { InputProps } from 'interfaces'
import { ChangeEvent } from 'react'
import { Input as InputStyle } from './style'

const Input = (props: InputProps) => {
	const { setState, name } = props
	return (
		<InputStyle
			{...props}
			onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
				setState((old: any) => ({ ...old, [name]: target.value }))
			}
		/>
	)
}

export default Input
