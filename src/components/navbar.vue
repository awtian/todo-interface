<template>
  <div class="navcont">
    <div class="navbar">
      <div class="title">todo.</div>
      <div class="menu"> 
        <div>Home</div>
        <div>Undone Task</div>
        <div>All Task</div>
      </div>
      <div class="search">
        <input id="searchbox" type="text" placeholder="search to-dos!🔎">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
 
<style>
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
  background-color: black;
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
  background-color: black;
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
  background-color: lightskyblue;
  text-decoration: underline;
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;

}

#searchbox {  
  background-color: black;
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


