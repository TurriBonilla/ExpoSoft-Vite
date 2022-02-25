interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}

const Providers = ({ children }: ProviderProps): JSX.Element => {
  return <>{children}</>
}

export default Providers
