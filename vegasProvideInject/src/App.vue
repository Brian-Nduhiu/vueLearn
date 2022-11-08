<script>
import Logo from './components/Logo.vue'
import UserPlay from './components/UserPlay.vue'
import Generator from './components/Generator.vue'
import Results from './components/Results.vue'

export default {
  data(){
    test:"Hello Jamal"
  },
  
  components:{
    Logo,
    UserPlay,
    Generator,
    Results
  },
  provide(){
    return{
      test: "Hello this is Jamal"
    }
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