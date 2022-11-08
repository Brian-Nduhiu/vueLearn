<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>