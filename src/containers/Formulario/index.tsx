import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Titulo } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.OUTROS)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        categoria
      })
    )
    navigate('/')
  }

  return (
    <>
      <Titulo>Nova tarefa</Titulo>
      <S.Form onSubmit={cadastrarTarefa}>
        <S.CampoCadastro
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome completo"
        />
        <S.CampoCadastro
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <S.CampoCadastro
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="Telefone"
        />
        <S.Opcoes>
          <p>Categoria</p>
          {Object.values(enums.Categoria).map((categoria) => (
            <S.Opcao key={categoria}>
              <input
                value={categoria}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categoria.OUTROS}
              />{' '}
              <label htmlFor={categoria}>{categoria}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <S.BotaoCadastrar type="submit">Cadastrar</S.BotaoCadastrar>
      </S.Form>
    </>
  )
}

export default Formulario
