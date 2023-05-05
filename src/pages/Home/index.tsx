import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraSuperior from '../../containers/BarraSuperior'
import ListaDosContatos from '../../containers/ListaDeContatos'

import { MainContainer } from '../../styles'

const Home = () => {
  return (
    <MainContainer>
      <div style={{ display: 'flex' }}>
        <BarraSuperior mostrarFiltros />
        <BotaoAdicionar />
      </div>
      <ListaDosContatos />
    </MainContainer>
  )
}

export default Home
