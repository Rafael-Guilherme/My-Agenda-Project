import styled from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/Contato'

type TagProps = {
  categoria?: enums.Categoria
}

function retornaCorDeFundo(props: TagProps): string {
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.vermelho
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.azul
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.amarelo

  return variaveis.cinza
}

export const Card = styled.div`
  width: 380px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;

  @media (max-width: 640px) {
    width: 300px;
  }
`
export const PrimeiraLinha = styled.div`
  display: grid;
  grid-template-columns: 78% 22%
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  height: 32px;
  font-size: 16px;
  color: ${variaveis.branco};
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`

export const Dados = styled.input`
  color: ${variaveis.preto};
  font-size: 14px;
  display: flex;
  width: 100%;
  margin: 8px 0;
  margin-left: 8px;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
