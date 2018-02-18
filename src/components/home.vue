<template>
<div class="container">
  <navbar />
  <loginpage />
</div>
</template>

<script>
import navbar from '@/components/navbar'
import loginpage from '@/components/loginpage'
export default{
  components: {
    navbar,
    loginpage
  }
}
</script>

<style>
.container {
  display:flex;
  flex-direction: column;
}
</style>
