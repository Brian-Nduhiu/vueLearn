<script>
import Buttons from "./Buttons.vue";
import Results from "./Results.vue";

export default {
    components:{
        Buttons,
        Results
    },
    props:{
        luckyPick1:{
            type:Number
        },
        luckyPick2:{
            type:Number
        },
        luckyPick3:{
            type:Number
        },
        generatedNum1:{
            type:Number,
            default:null
        },
        generatedNum2:{
            type:Number
        },
        generatedNum3:{
            type:Number
        },
        hasWon:{
            type:Boolean
        },
        hasPlayed:{
            type:Boolean
        }


        
    },
    methods:{
        numberGenerator(){
            

        }
    },
    computed:{  
        referee(){
            const userNums = [this.luckyPick1,this.luckyPick2,this.luckyPick3].sort
            this.generatedNum1=Math.floor(Math.random() * 10);
            this.generatedNum2=Math.floor(Math.random() * 10);
            this.generatedNum3=Math.floor(Math.random() * 10);
            const generatedList = [this.generatedNum1,this.generatedNum2,this.generatedNum3].sort
            this.hasWon = JSON.stringify(userNums) === JSON.stringify(generatedList)
        }
    }
}

</script>


<template >
    <div class="game">
        <div class="pregame">
        <p class="numPickText">What are your 3 lucky numbers? (0-9)</p>
    <form class="pregameForm">
            <input v-model="luckyPick1" type="number" name="lucky1" id="lucky1" min="0" max="9" class="pregameInput" required>
            <input v-model="luckyPick2" type="number" name="lucky2" id="lucky2" min="0" max="9" class="pregameInput" required>
            <input v-model="luckyPick3" type="number" name="lucky3" id="lucky3" min="0" max="9" class="pregameInput" required>
            <button type="submit" class="pregameInput">Play</button>
        </form>
        <p class="instructions">Click <span>Play</span> to reveal the numbers</p>
    </div>
    <Buttons :generatedNum1='this.luckyPick1' :generatedNum2='this.generatedNum2' :generatedNum3='this.generatedNum1'/>  
    <Results :hasWon="this.hasWon"/>
    </div>
    
    
</template>