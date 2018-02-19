<template>
  <div class="todo">
    <h1>Todo List!!</h1>
    <div class="todorows">
      <div class = "todorow">

        <div v-for="todo in todos" class="todocard">
        <div class="todotitle">
          <h2>{{ todo.title }}</h2>
        </div>
          <p class="tododesc">{{todo.description}}</p>
          <div class="buttons">
            <button class="deletetodo" @click="deletetodo(todo._id)"> 🗑 Delete </button>
            <button v-if="!todo.done" class="tododone" @click="toggleDone(todo._id)">Mark as done 👍</button>
            <button v-else class="todoundone" @click="toggleDone(todo._id)">Undone 😖 </button>
          </div>
        </div>
        
    
      </div>
      
  
    </div>
    
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'Vuex'

export default {
  computed: mapState(['todos']),
  name: 'todo',
  created() {
    this.loadUndone()
  },
  methods: {
    ...mapActions(['toggleDone', 'deletetodo']),
    ...mapMutations([ 'loadAll', 'loadDone', 'loadUndone'])
  }
}
</script>

<style>
h1 {
  margin: 50px;
}

.buttons {
  display:flex;
}
.todocard {
  display: flex;
  flex-direction: column;
  width: 30%;
  min-height: 150px;
  background-color: #d7d7d7bd;
  color:white;
  margin-right: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 11px;
  margin: 10px;
}


.todotitle {
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
  min-height: 22px;
  background-color: #212121;
}


.tododesc {
  min-height: 60px
}

.tododone {
  color: white;
  background-color: rgb(30, 168, 30);
  border: none;
  height: 30px;
  width: 53%;
  text-align: right;
  font-size: 20px;
  border-bottom-right-radius: 11px;
}

.todoundone {
  color: white;
  background-color: rgb(211, 32, 32);
  border: none;
  height: 30px;
  width: 53%;
  text-align: right;
  font-size: 20px;
  border-bottom-right-radius: 11px;
}

.deletetodo {
  color: white;
  background-color: rgb(211, 32, 32);
  border: none;
  height: 30px;
  width: 47%;
  text-align: left;
  font-size: 20px;
  border-bottom-left-radius: 11px;
}


.tododone:hover {
  background-color:darkcyan;
}

.todoundone:hover {
  background-color: pink;
}

.deletetodo:hover {
  background-color: pink;
}

.todorows {
  display: flex;
  align-items: center;
  justify-content: center;
}
.todorow {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 200px;
  background-color: white;
}

/* @media(max-width:400px) {
   .todorows {
    flex-direction: column;  
  }
  .todorow {
    flex-direction: column;  
  }
 .todocard{
    margin: 20px;
    width:30%;
  }
}

@media(min-width:400px) {
  .todocard{
    margin: 20px;
    width:30%;
  }
   .todorow {
    flex-direction: row;  
  }
  .todorow {
    flex-direction: row;  
  }
} */
</style>
