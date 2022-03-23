import { InputFormikProps } from 'interfaces'
import MaskedInput from 'react-text-mask'

const InputNit = (props: InputFormikProps) => {
  return <MaskedInput showMask {...props} mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]} />
}

export default InputNit
