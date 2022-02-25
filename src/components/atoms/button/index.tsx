import { MouseEvent } from 'react'
import { Style } from './style'

interface ButtonProps {
  type: string
  typeButton: string
  tag: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
  const { typeButton, type, tag, onClick } = props
  return (
    <Style typeButton={typeButton} type={type} onClick={onClick}>
      {tag}
    </Style>
  )
}

export default Button
