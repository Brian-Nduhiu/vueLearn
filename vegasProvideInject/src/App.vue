<script>
import Logo from './components/Logo.vue'
import UserPlay from './components/UserPlay.vue'
import Generator from './components/Generator.vue'
import Results from './components/Results.vue'

export default {
  components:{
    Logo,
    UserPlay,
    Generator,
    Results


  },
  data() {
    return {
      userInput: [],
      generatedNums: [],
      winCheck: [],
      hasWon: null,
      resultsMessage: ["Congratulations!!!!!!!", "Sorry you lost"],
    };
  },
  methods: {
    // Logs out the input from the user stored in userInput[]
    logCalls() {
      console.log(`User Input -- ${this.userInput}`);
    },

    //Generates 3 random numbers and stores them in generatedNums[]
    generator() {
      for (let num = 0; num < 3; num++) {
        this.generatedNums[num] = Math.floor(Math.random() * 10);
      }
      // this.generatedNums = [0,0,0] // Congratulations test
      console.log(`Generated Nums -- ${this.generatedNums}`);
    },

    //Checks for the equality of the user generated numbers & the computer generated numbers
    resultsChecker() {
      for (let num = 0; num < 3; num++) {
        if (this.userInput[num] == this.generatedNums[num]) {
          this.winCheck[num] = true; //checks equality on the individual positions of the arrays
        } else {
          this.winCheck[num] = false;
        }
      }

      if (this.winCheck.includes(false)) {
        this.hasWon = false;
      } else {
        this.hasWon = true;
      }
    },
  },
};
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