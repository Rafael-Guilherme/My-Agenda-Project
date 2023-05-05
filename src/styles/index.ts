import styled, { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: Poppins, sans-serif
  }

  Body {
    background-color: ${variaveis.cinzaClaro};
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media (max-width: 480px) {
    width: 340px;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 640px) {
    width: 300px;
  }
`
export const ContainerBotao = styled.div`
  display: flex;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  width: 50%;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza} ;
  border-radius: 8px;
  margin-right: 8px;

  @media (max-width: 640px) {
    width: 95%;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
