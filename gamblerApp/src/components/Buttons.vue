<script>

export default{
    props:['luckyPick1', 'luckyPick2', 'luckyPick3'],
}
</script>

<template>
<div class="buttons buttonsContainer">

<button class="buttonResults">{{luckyPick1}}</button>
<button class="buttonResults">{{luckyPick2}}</button>
<button class="buttonResults">{{luckyPick3}}</button>

</div>
</template>