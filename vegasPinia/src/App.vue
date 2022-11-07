<script>
export default {
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
    <h2 class="intro">Vegas Casino</h2>

    <p class="numPickText">What are your 3 lucky numbers? (0-9)</p>
    <form>
      <input
        v-model="userInput[0]"
        type="number"
        name="lucky1"
        id="lucky1"
        class="input"
        min="0"
        max="9"
        required
      />
      <input
        v-model="userInput[1]"
        type="number"
        name="lucky2"
        id="lucky2"
        class="input"
        min="0"
        max="9"
        required
      />
      <input
        v-model="userInput[2]"
        type="number"
        name="lucky3"
        id="lucky3"
        class="input"
        min="0"
        max="9"
        required
      />
      <button
        type="button"
        @click="
          logCalls();
          generator();
          resultsChecker();
        "
        class="input"
      >
        Play
      </button>
    </form>

    <p class="instructions">Click <span>Play</span> to reveal the numbers</p>

    <div class="buttons">
      <button
        :class="{
          win: winCheck[0] == true,
          lose: winCheck[0] == false,
        }"
        class="buttonResults"
      >
        {{ generatedNums[0] }}
      </button>
      <button
        :class="{
          win: winCheck[1] == true,
          lose: winCheck[1] == false,
        }"
        class="buttonResults"
      >
        {{ generatedNums[1] }}
      </button>
      <button
        :class="{
          win: winCheck[2] == true,
          lose: winCheck[2] == false,
        }"
        class="buttonResults"
      >
        {{ generatedNums[2] }}
      </button>
    </div>

    <h1 class="results" v-if="hasWon">{{ resultsMessage[0] }}</h1>
    <h1 class="results" v-else-if="hasWon == false && hasWon != null">
      {{ resultsMessage[1] }}
    </h1>
  </div>
</template>



<!-- 

  Component Breakdown

  App

    userInput

<p class="numPickText">What are your 3 lucky numbers? (0-9)</p>
    <form>
      <input
        v-model="userInput[0]"
        type="number"
        name="lucky1"
        id="lucky1"
        class="input"
        min="0"
        max="9"
        required
      />
      <input
        v-model="userInput[1]"
        type="number"
        name="lucky2"
        id="lucky2"
        class="input"
        min="0"
        max="9"
        required
      />
      <input
        v-model="userInput[2]"
        type="number"
        name="lucky3"
        id="lucky3"
        class="input"
        min="0"
        max="9"
        required
      />
      <button
        type="button"
        @click="
          logCalls();
          generator();
          resultsChecker();
        "
        class="input"
      >
        Play
      </button>
    </form>

    <p class="instructions">Click <span>Play</span> to reveal the numbers</p>


    Generator


<div class="buttons">
      <button
        :class="{
          win: winCheck[0] == true,
          lose: winCheck[0] == false,
        }"
        class="buttonResults"
      >
        {{ generatedNums[0] }}
      </button>
      <button
        :class="{
          win: winCheck[1] == true,
          lose: winCheck[1] == false,
        }"
        class="buttonResults"
      >
        {{ generatedNums[1] }}
      </button>
      <button
        :class="{
          win: winCheck[2] == true,
          lose: winCheck[2] == false,
        }"
        class="buttonResults"
      >
        {{ generatedNums[2] }}
      </button>
    </div>


    Results


<h1 class="results" v-if="hasWon">{{ resultsMessage[0] }}</h1>
    <h1 class="results" v-else-if="hasWon == false && hasWon != null">
      {{ resultsMessage[1] }}
    </h1>




 -->