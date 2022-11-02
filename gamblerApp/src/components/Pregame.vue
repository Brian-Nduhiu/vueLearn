<template>
    <p class="numPickText">What are your 3 lucky numbers? (0-9)</p>
    <form class="pregameForm">
            <input type="number" name="lucky1" id="lucky1" min="0" max="9" class="pregameInput" required>
            <input type="number" name="lucky2" id="lucky2" min="0" max="9" class="pregameInput" required>
            <input type="number" name="lucky3" id="lucky3" min="0" max="9" class="pregameInput" required>
            <button type="submit" class="pregameInput">Play</button>
        </form>
        <p class="instructions">Click <span>Play</span> to reveal the numbers</p>
</template>