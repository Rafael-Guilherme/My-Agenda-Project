import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoContato = styled(Link)`
  height: 39px;
  width: 39px;
  background-color: ${variaveis.azul};
  color: #fff;
  position: fixed;
  right: 285px;
  top: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;

  @media (max-width: 640px) {
    top: 130px;
    right: 70px;
  }
`
