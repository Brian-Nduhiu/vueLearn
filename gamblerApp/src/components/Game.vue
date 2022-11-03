<script>
import Buttons from "./Buttons.vue";
import Results from "./Results.vue";

export default {
    components:{
        Buttons,
        Results
    },
    data(){
        return {
            generatedNum1: "",
            generatedNum2: "",
            generatedNum3: "",
            numGenerated: false,
            hasPlayed: false
            
        }
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
        hasWon:{
            type:Boolean
        },
        


        
    },
    methods:{
        numberGenerator(){
            let num = Math.floor(Math.random() * 1000).toString();
            while(num.length < 3){
                num = Math.floor(Math.random() * 10).toString() + num
            }
           
            const numArr = num.split("")
            this.generatedNum1 = numArr[0]
            this.generatedNum2 = numArr[1],
            this.generatedNum3 = numArr[2]
        },
        compareNum(){
            const userNums = this.luckyPick1.toString() + this.luckyPick2.toString() + this.luckyPick3.toString()
            const genNums = this.generatedNum1  + this.generatedNum2 + this.generatedNum3
            this.hasWon = (userNums === genNums)
            this.hasPlayed= true;
        },
        playGame(){
            this.numberGenerator();
            this.compareNum();
            
            

        }
    },
    computed:{  
        // referee(){
        //     const userNums = [this.luckyPick1,this.luckyPick2,this.luckyPick3].sort
        //     const generatedList = [this.generatedNum1,this.generatedNum2,this.generatedNum3].sort
        //     return JSON.stringify(userNums) === JSON.stringify(generatedList)
        // }
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
            <button @click="playGame" type="button" class="pregameInput">Play</button>
        </form>
        <p class="instructions">Click <span>Play</span> to reveal the numbers</p>
    </div>
    <Buttons :generatedNum1='this.generatedNum1' :generatedNum2='this.generatedNum2' :generatedNum3='this.generatedNum1'/>  
    <Results :hasWon='this.hasWon' v-if="hasPlayed"/>
    </div>
    
    
</template>