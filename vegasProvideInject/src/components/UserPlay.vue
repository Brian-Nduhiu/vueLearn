<template>
    <div>
        <p >What are your 3 lucky numbers? (0-9)</p>
        <form>
            <input type="number" name="lucky1" id="lucky1" min="0" max="9" required>
            <input type="number" name="lucky2" id="lucky2" min="0" max="9" required>
            <input type="number" name="lucky3" id="lucky3" min="0" max="9" required>
            <button type="submit">Play</button>
        </form>
    <p class="instructions">Click <span>Play</span> to reveal the numbers</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>