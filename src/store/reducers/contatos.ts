import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

import * as enums from '../../utils/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'José Almeida Fernandes',
      email: 'josefer@gmail.com',
      telefone: '(31)99489-9589',
      categoria: enums.Categoria.TRABALHO
    },
    {
      id: 2,
      nome: 'Roberta da Silva Ferreira',
      email: 'rosfer@gmail.com',
      telefone: '(12)99934-9534',
      categoria: enums.Categoria.FAMILIA
    },
    {
      id: 3,
      nome: 'Henrique Souza Oliveira',
      email: 'rickol@gmail.com',
      telefone: '(21)99675-6789',
      categoria: enums.Categoria.AMIGOS
    },
    {
      id: 4,
      nome: 'Alberto de Nóbrega',
      email: 'zebeto@gmail.com',
      telefone: '(11)99786-5634',
      categoria: enums.Categoria.OUTROS
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex((c) => c.id === action.payload.id)
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) => contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contado já adicionado')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {...action.payload, id: ultimoContato ? ultimoContato.id + 1 : 1}
        state.itens.push(contatoNovo)
      }
    }
  }
})

export  const { cadastrar, editar, remover } = contatosSlice.actions
export default contatosSlice.reducer
