import {
	Dispatch,
	InputHTMLAttributes,
	MouseEventHandler,
	SetStateAction,
} from 'react'

export interface CredentialsInterface {
	email: string
	password: string
}

export interface RegisterInterface {
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

export interface OnClickInterface<T> {
	onClick: MouseEventHandler<T>
}

export interface CardHelpProps
	extends OnClickInterface<HTMLButtonElement>,
		IsActiveInterface {
	title: string
	icon: JSX.Element
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	setState: Dispatch<SetStateAction<any>>
	name: string
}

export interface FaqInterface {
	faq: string
	body: string
	show: boolean
}

export interface ResultModuleInterface {
	title: string
}

export interface ColorInterface { 
	color: 'primary' | 'secondary' | 'error' | 'alert' | 'success'
}

export interface FaqsProps {
	faq: string
	body: string
}

export interface IsActiveInterface {
	isActive: boolean
}
