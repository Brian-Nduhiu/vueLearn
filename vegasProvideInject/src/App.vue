<script>
import Logo from './components/Logo.vue'
import UserPlay from './components/UserPlay.vue'
import Generator from './components/Generator.vue'
import Results from './components/Results.vue'

export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  provide() {
    // use function syntax so that we can access `this`
    return {
      message: this.message
    }
  },
  
  components:{
    Logo,
    UserPlay,
    Generator,
    Results
  },
  
  }
</script>

<template>
  <div class="container">
    <Logo/>
   <UserPlay/>
   <Generator/>
   <Results/>
  </div>
</template>





<!-- 
  Component BreakDown

  App.vue

    logo.vue
    userPlay.vue
    generator.vue
    results.vue
 -->