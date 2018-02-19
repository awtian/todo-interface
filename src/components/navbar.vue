<template>
  <div class="navcont">
    <div class="navbar">
      <div class="title">todo.</div>
      <div v-if="login" class="menu">
        <div @click="showCreate">New Todo</div>
        <div @click="loadAll()">All Tasks</div>
        <div @click="loadUndone()">Undone Tasks</div>
        <div @click="loadDone()">Done Tasks</div>
        <div @click="toggleLogin(false)" >Logout</div>
      </div>
      <!-- <div v-if= "login" class="search">
        <input id="searchbox" type="text" placeholder="search to-dos!🔎">
      </div> -->
    </div>
  <modal name="createtodo"> 
    <div class="modalcontent">
      <h3>Create new Todo</h3>
      <input type="text" name="title" placeholder="title" v-model="title"> <br />
      <input type="text" name="description" placeholder="description" v-model="description"> <br />
      <button class= "addbutton" @click="addtodo()">add todo</button>
    </div>
  </modal>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'Vuex'
export default {
  name: 'navbar',
  computed: mapState(['login']),
  data: {
    title: '',
    description: ''
  },
  methods: {
    ...mapMutations(['posttodo','toggleLogin', 'loadAll', 'loadDone', 'loadUndone']),
    showCreate () {
    this.$modal.show('createtodo');
    },
    hideCreate () {
    this.$modal.hide('createtodo');
    },
    addtodo(){
      let payload = {title : this.title, description : this.description}
      this.posttodo(payload)
    }
  },
}
</script>

<style>
.modalcontent{
  font-family:sans-serif;
  margin-left: 20px;
  font-size: 25px;
}
input[type="text"]
{
    font-size:24px;
}
.swal-title{
  font-family: sans-serif;
}

.addbutton {
  height:30px;
}
.swal-text{
  font-family: sans-serif;
}

.navcont{
  z-index: 999;
  top:0;
  width:100%;
  position:fixed;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  top: 0;
  left:0;
  position: absolute;
  width: 100%;
  height: 75px;
  background-color: #212121;
}

.title {
  font-weight: bold;
  font-size: 3em;
  color: white;
  padding-right: 60px;
  margin-top:10px;
}

.menu {
  display: flex;
  flex-direction: row;
  color: white;
  background-color: #212121;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5em;
  width: 50%;
}

.menu div{
  display:flex;
  height: 100%;
  width: 200px;
  align-items: center;
  justify-content: center;
}
.menu div:hover{
  background-color: darkgrey;
  text-decoration: underline;
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;

}

#searchbox {
  background-color: #212121;
  color: white;
  font-size:20px;
  height: 40px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
}

#searchbox:focus {
  outline:0;
}

</style>
