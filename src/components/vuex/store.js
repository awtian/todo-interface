import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

let state = {
  login : false,
  todos: []
}

const actions= {
  toggleDone ({commit}, todoid) {
    axios.patch(`http://server.wizawt.com/todo/${todoid}`, {}, {headers: {token: localStorage.token}})
      .then(resp => {
        commit('toggleDone', {
          todoid,
          done : resp.data.details.done
        })
      })
      .catch(console.error)
  },
  deletetodo({commit}, todoid) {
    axios.delete(`http://server.wizawt.com/todo/${todoid}`, {headers: {token: localStorage.token}})
    .then(resp => {
      commit('deletetodo', {
        todoid
      })
    })
    .catch(console.error)

  }

}

const mutations = {
  posttodo (state, payload) {
    axios.post('http://server.wizawt.com/todo/', payload ,{headers: {token: localStorage.token}})
    .then(resp => {
      console.log(resp)
      state.todos.push(resp.data.details)
    })
    .catch(console.error)
  },
  toggleLogin (state, payload) {
    state.login = payload
    if (payload === false) {
      localStorage.removeItem('token')
      state.todos = [];
    }
  },
  loadAll (state) {
  axios.get('http://server.wizawt.com/todo/', {headers: {token: localStorage.token}})
    .then(resp => {
      state.todos = resp.data.details
      console.log(resp)
      console.log(state.todos)
    })
    .catch(console.error)
  },
  loadDone (state) {
    axios.get('http://server.wizawt.com/todo/done', {headers: {token: localStorage.token}})
      .then(resp => {
        state.todos = resp.data.details
        console.log(resp)
        console.log(state.todos)
      })
      .catch(console.error)
    },
  loadUndone (state) {
    axios.get('http://server.wizawt.com/todo/undone', {headers: {token: localStorage.token}})
      .then(resp => {
        state.todos = resp.data.details
        console.log(resp)
        console.log(state.todos)
      })
      .catch(console.error)
    },
  toggleDone (state, {todoid, done}) {
    state.todos = state.todos.map(todo => {
      if(todo._id == todoid) {
        todo.done = done
      }
      return todo;
    })
    let status = done ? "done" : "undone";
    swal({
      title: "Success!",
      text: "You mark this todo as "+ status+ "!!!",
      icon: "success",
      button: "Hore!",
    });
  },

  deletetodo (state, {todoid, done}) {
    state.todos = state.todos.filter(todo => todo._id != todoid)
    swal({
      title: "Success!",
      text: `You've deleted this todo (id: ${todoid})`,
      icon: "success",
      button: "yay!",
    });
  }

}

const store = new Vuex.Store({state, mutations, actions}) 

export default store