import * as enums from '../utils/Contato'

class Contato {
  nome: string
  email: string
  telefone: string
  categoria: enums.Categoria
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    categoria: enums.Categoria,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.categoria = categoria
    this.id = id
  }
}

export default Contato
