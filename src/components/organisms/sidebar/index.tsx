import { WrapperLinks, LinkItem, WraperProfile, WrapperImageProfile, WrapperInformation } from './style'
import { dataSidebar } from 'const'
import { SidebarProps } from 'interfaces'
import { MdOutlinePowerSettingsNew } from 'react-icons/md'

const Sidebar = (props: SidebarProps) => {
  const { showMenu } = props
  return (
    <WrapperLinks show={showMenu}>
      {dataSidebar.map((button: any, key: number) => (
        <LinkItem key={key} to={button.route}>
          {button.icon}
          {button.tag}
        </LinkItem>
      ))}
      <WraperProfile show={showMenu}>
        <WrapperImageProfile>WS</WrapperImageProfile>
        <WrapperInformation>
          <p>S&L System LTDA</p>
          <p className='companyOwner'>Walter Santander</p>
        </WrapperInformation>
        <MdOutlinePowerSettingsNew />
      </WraperProfile>
    </WrapperLinks>
  )
}

export default Sidebar
