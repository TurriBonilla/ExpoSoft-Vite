import { ExpoHelp } from 'assets'
import { Title } from 'components/atoms'

const HelpInformation = () => {
  return (
    <>
      <div>
        <Title title={'ExpoSoft'} />
        <p>
          Con ExpoSoft tendrás la posibilidad de conocer en tiempo record el
          nivel de potencial exportador que tiene tu empresa. ExpoSoft se
          encarga de analizar los datos suministrados y te ayudará a conocer los
          puntos débiles, además, compara tus resultados con los de otras
          empresas analizadas previamente para darte recomendaciones sobre como
          fortalecer estos puntos.
        </p>
      </div>
      <img src={ExpoHelp} alt="Ayuda ExpoSoft" />
    </>
  )
}

export default HelpInformation
