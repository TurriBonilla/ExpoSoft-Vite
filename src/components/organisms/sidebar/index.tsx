import { style } from './style'
import { dataSidebar } from 'const'
import { SidebarProps } from 'interfaces'

const Sidebar = (props: SidebarProps) => {
  const { showMenu } = props
  return (
    <style.WrapperLinks show={showMenu}>
      {dataSidebar.map((button, key) => (
        <style.LinkItem key={key} to={button.route}>
          {button.icon}
          {button.tag}
        </style.LinkItem>
      ))}
    </style.WrapperLinks>
  )
}

export default Sidebar
