<template>
    <div>
        <h1 class="results">{{fullMessage}}</h1>
    </div>
</template>

<script>
    export default {
  inject: ['message'],
  data() {
    return {
      // initial data based on injected value
      fullMessage: this.message
    }
  }
}

</script>