import { MouseEvent } from 'react'

export interface ICredentials {
  email: string
  password: string
}

export interface IRegister {
  name: string
  surname: string
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
}

export interface SidebarProps {
  showMenu: boolean
}

export interface CardHelpProps {
  title: string
  icon: JSX.Element
  isActive: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}
