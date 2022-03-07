import { Brand } from 'components/atoms'
import { Sidebar } from 'components/organisms'
import { handleShowMenu } from 'components/organisms/sidebar/sidebar'
import { useState } from 'react'
import { MdMenu, MdOutlineMenuOpen } from 'react-icons/md'
import { Outlet } from 'react-router-dom'
import { style } from './style'

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <style.Container>
      <style.HeaderMenu>
        <style.WrapperMenu>
          <div className='ContainerBrand'>
            <Brand />
            <h1>ExpoSoft</h1>
          </div>
          <style.WrapperIconBars
            onClick={() => setShowMenu(handleShowMenu(showMenu))}
          >
            {showMenu ? <MdOutlineMenuOpen /> : <MdMenu />}
          </style.WrapperIconBars>
        </style.WrapperMenu>
        <Sidebar showMenu={showMenu} />
      </style.HeaderMenu>
      <style.WrapperOutlet>
        <Outlet />
      </style.WrapperOutlet>
    </style.Container>
  )
}

export default Home
