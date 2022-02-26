import { InputProps } from 'interfaces'
import { ChangeEvent } from 'react'
import { style } from './style'

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
