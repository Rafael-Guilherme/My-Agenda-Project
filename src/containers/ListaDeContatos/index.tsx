import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'

import { Titulo } from '../../styles'
import * as S from './styles'

import { RootReducer } from '../../store'

const ListaDosContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'categoria') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === valor
        )
      } else if (criterio === 'nome') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.nome === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    if (criterio === 'todos') {
      mensagem = `${quantidade} contatos(s) encontrado(s) como: todos ${complementacao}`
    } else {
      mensagem = `${quantidade} contatos(s) encontrado(s) como "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <S.ContatoContainer>
      <Titulo>{mensagem}</Titulo>
      <S.ListaContatos>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              categoria={c.categoria}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </S.ListaContatos>
    </S.ContatoContainer>
  )
}

export default ListaDosContatos
