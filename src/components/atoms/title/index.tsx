import { style } from './style'

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return <style.Title>{title}</style.Title>
}

export default Title
