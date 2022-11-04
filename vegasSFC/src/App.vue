
<script>
export default{
  
  data(){
        return {
            userInput:[],
            generatedNums:[],
            // winCheck:[]

        }
  },
  methods:{ 
    logCalls(){
      console.log(`User Input -- ${this.userInput}`);
    },
    generator(){
      for (let num = 0; num < 3; num++) {
        this.generatedNums[num] = Math.floor(Math.random() * 10);
      }
      console.log(`Generated Nums -- ${this.generatedNums}`);

  },
    // resultsChecker(){
    //   for (let num = 0; num < 3; num++) {
    //     if(this.userInput[num] == this.generatedNums[num]){
    //       winCheck[num] = true
    //     }
    //     else{
    //       this.winCheck[num] = false
    //     }
        
    //   }


    // }


  
}
}
</script>

<template>
 <div class="container">

<h2 class="intro">Vegas Casino</h2>


<p class="numPickText">What are your 3 lucky numbers? (0-9)</p>
<form>
    <input v-model="userInput[0]" type="number" name="lucky1" id="lucky1" class="input" min="0" max="9" required>
    <input v-model="userInput[1]" type="number" name="lucky2" id="lucky2" class="input" min="0" max="9" required>
    <input v-model="userInput[2]" type="number" name="lucky3" id="lucky3" class="input" min="0" max="9" required>
    <button type="button" @click="logCalls(); generator()" class="input">Play</button>
</form>

<p class="instructions">Click <span>Play</span> to reveal the numbers</p>

<div class="buttons">

    <button class="buttonResults ">{{generatedNums[0]}}</button>
    <button class="buttonResults ">{{generatedNums[1]}}</button>
    <button class="buttonResults ">{{generatedNums[2]}}</button>

</div>

<h1 class="results">Congratulations!!!!!!!!!!!</h1>

</div>
  
</template>