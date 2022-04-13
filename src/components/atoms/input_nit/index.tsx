import { InputFormikProps } from 'interfaces'
import { InputNit as Input } from './style'

const InputNit = (props: InputFormikProps) => {
  return (
    <Input
      {...props}
      keepCharPositions={true}
      placeholderChar={'\u2000'}
      mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]}
    />
  )
}

export default InputNit
