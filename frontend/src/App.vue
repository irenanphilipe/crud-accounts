<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Cadastro de Contas</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="salvar">
        <label>Nome</label>
        <input type="text" placeholder="Nome" v-model="conta.name" />
        <label>CEP</label>
        <input type="text" placeholder="CEP" v-model="conta.zipcode" />
        <label>E-mail</label>
        <input type="text" placeholder="Email" v-model="conta.email" />
        <label>Usuário</label>
        <input type="text" placeholder="Usuário" v-model="conta.username" />
        <label>Senha</label>
        <input type="password" placeholder="Senha" v-model="conta.password" />

        <button class="waves-effect waves-light btn-small">
          Salvar<i class="material-icons left">save</i>
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Usuário</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="conta of contas" :key="conta.id">
            <td>{{ conta.name }}</td>
            <td>{{ conta.email }}</td>
            <td>{{ conta.username }}</td>
            <td>
              <button @click="editar(conta)" class="waves-effect btn-small blue darken-1">
                <i class="material-icons">create</i>
              </button>
              <button @click="remover(conta)" class="waves-effect btn-small red darken-1">
                <i class="material-icons">delete_sweep</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Contas from "./services/contas";

export default {
  data() {
    return {
      conta: {
        id: "",
        name: "",
        zipcode: "",
        email: "",
        username: "",
        password: "",
      },
      contas: [],
      erros: []
    };
  },

  mounted() {
    this.listar()
  },

  methods: {
    listar() {
      Contas.listar().then((response) => {
        this.contas = response.data;
      });
    },

    salvar() {
      Contas.salvar(this.conta).then((response) => {
        this.conta = {}
        alert("Salvo com sucesso", this.conta.id);
        this.listar()
      }).catch (error => {
        alert(error.response.data.error)
      })
      
      //   Contas.atualizar(this.conta).then((response) => {
      //   this.conta = {}
      //   alert("Atualizado com sucesso");
      //   this.listar()
      // }).catch (error => {
      //   alert(error.response.data.error)
      // })
      
       
    },

    editar(conta) {
      this.conta = conta
    },

    remover(conta) {
      Contas.deletar(conta).then(response => {
        this.listar();
        this.erros = []
      }).catch(error => {
        alert(error.response.data.error)
      })
    }
  },
};
</script>

<style>
</style>
