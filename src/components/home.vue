<template>
<div class="container">
  <navbar />
  <loginpage v-if="!login" />
  <todo v-else/>
</div>
</template>

<script>
import navbar from '@/components/navbar'
import loginpage from '@/components/loginpage'
import todo from '@/components/todo'
import {mapState, mapMutations} from 'Vuex'

export default {
  methods: {
    ...mapMutations(['toggleLogin'])
  },
  computed: mapState(['login']),
  created() {
    if (localStorage.token === undefined) {
      this.toggleLogin(false)
    } else {
      this.toggleLogin(true)
    }
  },
  components: {
    navbar,
    loginpage,
    todo
  }
}
</script>

<style>
.container {
  display:flex;
  flex-direction: column;
}
</style>
