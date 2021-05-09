import { http } from './config';
export default {
  listar:() => {
    return http.get('accounts')
  },

  salvar:(conta) => {
    return http.post('accounts', conta)
  },

  atualizar:(conta) => {
    return http.put(`accounts/${conta.id}`, conta)
  },

  deletar:(conta) => {
    return http.delete(`accounts/${conta.id}`, {data: conta})
  }
}