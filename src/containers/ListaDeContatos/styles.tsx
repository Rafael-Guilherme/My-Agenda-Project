import styled from "styled-components";

export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

  @media (max-width: 640px) {
    width: 300px
  }
`
export const ListaContatos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

