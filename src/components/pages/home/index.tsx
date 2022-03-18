import { Brand } from 'components/atoms'
import { Sidebar } from 'components/organisms'
import { handleShowMenu } from 'components/organisms/sidebar/sidebar'
import { useState } from 'react'
import { MdMenu, MdOutlineMenuOpen } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import { Container, HeaderMenu, WrapperMenu, WrapperIconBars, WrapperOutlet } from './style'

const Home = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <Container>
      <HeaderMenu>
        <WrapperMenu>
          <div className='ContainerBrand'>
            <Brand />
            <h1>ExpoSoft</h1>
          </div>
          <WrapperIconBars onClick={() => setShowMenu(handleShowMenu(showMenu))}>{showMenu ? <MdOutlineMenuOpen /> : <MdMenu />}</WrapperIconBars>
        </WrapperMenu>
        <Sidebar showMenu={showMenu} />
      </HeaderMenu>
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>
    </Container>
  )
}

export default Home
