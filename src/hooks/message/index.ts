import { useState } from 'react'

const useMensaje = () => {
  const [mensaje, setMensaje] = useState<string | null>()

  const updateMensaje = (severity: string, label: string) => {
    if (!severity && !label) {
      setMensaje(null)
      return
    }
    alert(label)
    // setMensaje(
    //     <Alert severity={severity} >
    //         {label}
    //     </Alert>
    // )
  }

  const mensajeLoader = () => {
    setMensaje('loading')
  }

  return [mensaje, updateMensaje, mensajeLoader]
}

export default useMensaje
