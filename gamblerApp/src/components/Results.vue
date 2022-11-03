
<script>
export default{
    props:['hasWon'],
    data(){
        return{
        wonMessage:"Congratulations!!!!!!!!!!!",
        lossMessage:"Sorry try again"
    }
    }
}

</script>

<template>

        <h1 class="results" v-if="hasWon">{{wonMessage}}</h1>
        <h1 class="results" v-else>{{lossMessage}}</h1>
    
    
</template>