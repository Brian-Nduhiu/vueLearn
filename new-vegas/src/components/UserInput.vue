<template>
    <div class="flex flex-col  items-center">
        <form class="mt-20 flex flex-row justify-center">
        
            <input type="number" min="0" max="9" class="m-10 h-20 w-20 bg-slate-300 dark:bg-slate-700 text-5xl font-signika text-center" required>
            <input type="number" min="0" max="9" class="m-10 h-20 w-20 bg-slate-300 dark:bg-slate-700 text-5xl font-signika text-center" required>
            <input type="number" min="0" max="9" class="m-10 h-20 w-20 bg-slate-300 dark:bg-slate-700 text-5xl font-signika text-center" required>
        </form>
        <button class=" w-60 h-9 rounded-full bg-amber-600 hover:bg-amber-500 shadow-2xl text-slate-800 text-xl dark:text-slate-900  font-marhey dark:bg-amber-600 dark:hover:bg-amber-500 hover:scale-105 ">Play</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>