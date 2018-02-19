<template>
  <div>
    <div class="todo">
      <div id ="mamak">
        <div id="depan">
          <fbbutton />
        </div>
      </div>
      <img id="bg-img" src="../assets/notebook.jpeg" alt="notebook">
    </div>
  </div>
</template>

<script>
import fbbutton from '@/components/fbbutton'

export default {
  name: 'loginpage',
  components: {
    fbbutton
  }
}
</script>

<style>

#mamak {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
}

#depan {
  display:flex;
  width: 250px;
  height: 50px;
  background-color:white;
}

#bg-img{
  position: relative;
  z-index: -1;
  width: 100%;
  height: auto;
  background-image: url("../assets/notebook.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
