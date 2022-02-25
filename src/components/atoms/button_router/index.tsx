import { Button } from './style'

interface ButtonRouterProps {
  type: string
  route: string
  tag: string
}

const ButtonRouter = (props: ButtonRouterProps) => {
  const { type, route, tag } = props
  return (
    <Button type={type} to={route}>
      {tag}
    </Button>
  )
}

export default ButtonRouter
