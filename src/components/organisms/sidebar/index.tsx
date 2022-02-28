import { style } from './style'
import { dataSidebar } from 'const'
import { SidebarProps } from 'interfaces'
import { MdOutlinePowerSettingsNew } from 'react-icons/md'

const Sidebar = (props: SidebarProps) => {
  const { showMenu } = props
  return (
    <style.WrapperLinks show={showMenu}>
      {dataSidebar.map((button: any, key: number) => (
        <style.LinkItem key={key} to={button.route}>
          {button.icon}
          {button.tag}
        </style.LinkItem>
      ))}
      <style.WraperProfile show={showMenu}>
        <style.WrapperImageProfile>WS</style.WrapperImageProfile>
        <style.WrapperInformation>
          <p>S&L System LTDA</p>
          <p className='companyOwner'>Walter Santander</p>
        </style.WrapperInformation>
        <MdOutlinePowerSettingsNew />
      </style.WraperProfile>
    </style.WrapperLinks>
  )
}

export default Sidebar
