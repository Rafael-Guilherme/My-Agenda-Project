import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar, ContainerBotao } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  categoria,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0 && emailOriginal.length > 0 && telefoneOriginal.length > 0) {
      setNome(nomeOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      {estaEditando && <em>Editando: {nome} </em>}
      <S.PrimeiraLinha>
        <label htmlFor={nome}>
          <S.Titulo>
            Nome:
          </S.Titulo>
          <S.Dados
            disabled={!estaEditando}
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            id={nome}
          />
        </label>
        <S.Tag categoria={categoria}>
          {categoria}
        </S.Tag>
      </S.PrimeiraLinha>
      <label htmlFor={email}>
        <S.Titulo>
          E-mail:
        </S.Titulo>
        <S.Dados
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          id={email}
        />
      </label>
      <label htmlFor={telefone}>
        <S.Titulo>
          Telefone:
        </S.Titulo>
        <S.Dados
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          id={telefone}
        />
      </label>
      <S.BarraAcoes>
        {estaEditando ? (
          <ContainerBotao>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    categoria,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </ContainerBotao>
        ) : (
          <ContainerBotao>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </ContainerBotao>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
