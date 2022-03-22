import { FormikContextType } from 'formik'

export const useFormikFiledProps = ({ touched, errors, getFieldProps }: FormikContextType<any>) => {
  const getFieldHelperText = (filedName: string) => {
    if (touched[filedName] && errors[filedName]) {
      return String(errors[filedName])
    }
  }

  const getFiledError = (fieldName: string) => {
    return Boolean(fieldName in touched && fieldName in errors)
  }

  const getFieldFormikProps = (filedName: string) => {
    return {
      ...getFieldProps(filedName),
      error: getFiledError(filedName),
    }
  }

  return [getFieldFormikProps]
}
