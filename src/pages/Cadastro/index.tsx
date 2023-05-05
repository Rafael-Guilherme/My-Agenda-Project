import BarraSuperior from '../../containers/BarraSuperior'
import Formulario from '../../containers/Formulario'
import { MainContainer } from '../../styles'

const Cadastro = () => {
  return (
    <MainContainer>
      <BarraSuperior mostrarFiltros={false} />
      <Formulario />
    </MainContainer>
  )
}

export default Cadastro
