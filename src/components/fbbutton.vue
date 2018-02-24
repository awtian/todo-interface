<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    <div class= "content-button">
      <div id="b">
        F
      </div>
      <div id="a">
         Lovin' With Facebook
      </div>
    </div>
  </fb-signin-button>
</template>

<script>
import {mapMutations} from 'Vuex'
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email',
        return_scopes: true
      }
    }
  },
  methods: {
    ...mapMutations([
      'toggleLogin', 'loadAll'
    ]),
    onSignInSuccess (response) {
      FB.api('/me', {fields: 'name,email,id'}, dude => {
        let fbtoken = response.authResponse.accessToken
        axios.post('http://server.wizawt.com', {'token': fbtoken})
          .then(resp => {
            window.localStorage.setItem('token', resp.data.jwt)
            this.toggleLogin(true)
          })
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
#a {
  border-left: 1px solid white;
  padding-left: 10px;
}
#b {
  padding-right:10px;
}
.content-button {
  align-items: center;
  padding-top: 7px;
  justify-content: center;
  display: flex;
}
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 100%;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
