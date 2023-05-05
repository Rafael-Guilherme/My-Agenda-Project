import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroContato from '../../components/FiltroContato'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/Contato'
import { Botao } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraSuperior = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Superior>
        {mostrarFiltros ? (
          <>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroContato
                valor={enums.Categoria.FAMILIA}
                criterio="categoria"
                legenda="família"
              />
              <FiltroContato
                valor={enums.Categoria.AMIGOS}
                criterio="categoria"
                legenda="amigos"
              />
              <FiltroContato
                valor={enums.Categoria.TRABALHO}
                criterio="categoria"
                legenda="trabalho"
              />
              <FiltroContato
                valor={enums.Categoria.OUTROS}
                criterio="categoria"
                legenda="outros"
              />
              <FiltroContato criterio="todos" legenda="todos" />
            </S.Filtros>
          </>
        ) : (
          <S.DivBotao>
              <Botao onClick={() => navigate('/')} type="button">
                Voltar a lista do contatos
              </Botao>
          </S.DivBotao>
        )}
    </S.Superior>
  )
}

export default BarraSuperior
