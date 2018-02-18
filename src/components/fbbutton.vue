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
    onSignInSuccess (response) {
      FB.api('/me', dude => {
        console.log(`Good to see you, ${dude.name}, ${dude.email}.`)
        console.log(`Good to see you, ${JSON.stringify(dude)}.`)
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