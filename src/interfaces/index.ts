import { Dispatch, InputHTMLAttributes, MouseEvent, SetStateAction } from 'react'

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

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setState: Dispatch<SetStateAction<any>>
  name: any
}

export interface IFaq {
  faq: string,
  body: string,
  show: boolean
}

export interface IResultModule {
  title: string
}