import { FormikProvider, FormikContextType, Form as Formik } from 'formik'

interface DividerProps {
  children: JSX.Element | JSX.Element[]
  formik: FormikContextType<any>
}

const Form = ({ children, formik }: DividerProps) => {
  const { handleSubmit } = formik

  return (
    <FormikProvider value={formik}>
      <Formik noValidate autoComplete='off' onSubmit={handleSubmit}>
        {children}
      </Formik>
    </FormikProvider>
  )
}

export default Form
