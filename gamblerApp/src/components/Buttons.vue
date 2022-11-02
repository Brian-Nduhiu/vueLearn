<script>

export default{
    props:['generatedNum1','generatedNum2','generatedNum3'],
}

</script>

<template>
<div class="buttons buttonsContainer">

<button class="buttonResults">{{generatedNum1}}</button>
<button class="buttonResults">{{generatedNum2}}</button>
<button class="buttonResults">{{generatedNum3}}</button>

</div>
</template>