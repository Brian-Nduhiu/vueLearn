<template>
    <div>
        <h1 class="results" v-if="hasWon">{{ resultsMessage[0] }}</h1>
    <h1 class="results" v-else-if="hasWon == false && hasWon != null">
      {{ resultsMessage[1] }}
    </h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>