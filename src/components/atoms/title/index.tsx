import { style } from './style'

interface TitleProps {
  title: string
  size?: number
}

function Title({ title, size }: TitleProps) {
  return <style.Title size={size}>{title}</style.Title>
}

export default Title
