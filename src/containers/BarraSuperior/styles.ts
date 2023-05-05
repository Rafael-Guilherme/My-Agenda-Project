import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Superior = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  width: 410px;

  @media (max-width: 640px) {
    width: 300px;
  }
`
export const Campo = styled.input`
  border-radius: 8px;
  background-color: ${variaveis.branco};
  padding: 8px;
  font-weight: bold;
  color: ${variaveis.preto};
  border-color: ${variaveis.cinzaClaro};
  width: 100%;
`

export const Filtros = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
  }
`

export const DivBotao = styled.div`
  margin-left: -70px;

  @media (max-width: 640px) {
    margin-left: 20px;
  }
`
