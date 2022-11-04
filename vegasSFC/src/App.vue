
<script>
// import RandomOrg from 'random-org';
export default{
  data(){
        return {
            userInput:[]
            
        }
  },
  methods:{ 
    logCalls(){
      console.log(this.userInput);
    },
    //Tester Method
    // logTest(){
    //   console.log("Hello Jamal");
    // }
  //   generator(){
  //     var random = new RandomOrg({ apiKey: 'a8abb2e3-48bb-4ca2-a03b-a9aa9dece257' });
  //     random.generateIntegers({ min: 0, max: 9, n: 3 })
  //     .then(function(result) {
  //     console.log(result.random.data); // [55, 3]
  // }
  // );
  // }
  },
  
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
    <button type="button" @click="logCalls();" class="input">Play</button>
</form>

<p class="instructions">Click <span>Play</span> to reveal the numbers</p>

<div class="buttons">

    <button class="buttonResults win">1</button>
    <button class="buttonResults lose">2</button>
    <button class="buttonResults">9</button>

</div>

<h1 class="results">Congratulations!!!!!!!!!!!</h1>

</div>
  
</template>