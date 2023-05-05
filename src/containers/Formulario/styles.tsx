import styled from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: ${variaveis.branco};
`

export const CampoCadastro = styled.input`
  border-radius: 8px;
  background-color: ${variaveis.branco};
  padding: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${variaveis.preto};
  border-color: ${variaveis.cinzaClaro};
  width: 100%;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  color: ${variaveis.preto};

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
export const BotaoCadastrar = styled(Botao)`
  background-color: ${variaveis.verde};
  width: 100%
`
