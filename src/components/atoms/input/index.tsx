import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction
} from 'react'
import { style } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setState: Dispatch<SetStateAction<any>>
  name: string
}

const Input = (props: InputProps) => {
  const { setState, name } = props
  return (
    <style.Input
      {...props}
      onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
        setState((old: any) => ({ ...old, [name]: target.value }))
      }
    />
  )
}

export default Input
