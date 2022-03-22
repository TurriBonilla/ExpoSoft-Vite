import { FieldInputProps, FormikHandlers } from 'formik'
import { InputHTMLAttributes, MouseEventHandler } from 'react'

export interface CredentialsInterface {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  nit: string
  email: string
  password: string
}
export interface RegisterInterface extends RegisterData {
  confirmEmail: string
  confirmPassword: string
}

export interface SidebarProps {
  showMenu: boolean
}

export interface OnClickInterface<T> {
  onClick: MouseEventHandler<T>
}

export interface DataCardHelpProps {
  title: string
  icon: JSX.Element
}

export interface CardHelpProps extends OnClickInterface<HTMLButtonElement>, IsActiveInterface, DataCardHelpProps {}

export type InputFormikAttributes = FieldInputProps<any> & InputHTMLAttributes<HTMLInputElement>

export interface InputFormikProps extends InputFormikAttributes {
  error: boolean
}

export interface ResultModuleInterface {
  title: string
}

export interface ColorInterface {
  color: 'primary' | 'secondary' | 'error' | 'alert' | 'success' | 'warning'
}

export interface FaqsProps {
  faq: string
  body: string
}

export interface IsActiveInterface {
  isActive: boolean
}
export interface ResponseData {
  message: string
  statusCode: number
}
export interface ResponseAuth extends ResponseData {
  nit?: string | null
  token?: string | null
}
