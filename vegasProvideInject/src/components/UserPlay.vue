<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>