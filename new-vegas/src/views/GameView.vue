<template>
  <div>
    


    <!--Nav Bar-->
    <nav class="flex flex-row justify-between bg-green-900 text-cyan-50 dark:bg-black dark:text-cyan-50 h-20 items-center">

      <i class="fa-solid fa-vault ml-10"></i>
      <p class="font-dancingScript text-3xl">{{logoText}}</p>
      <label  class="switch mr-10">
    <input @click="toggleDark()" type="checkbox">
    <span class="slider round"></span>
    </label>
    </nav>

    <UserInput/>
    
  </div>
</template>

<script setup>
import {useDark,useToggle} from '@vueuse/core'
import UserInput from '@/components/UserInput.vue'
import { ref } from 'vue';


const isDark = useDark()
const toggleDark = useToggle(isDark)
const logoText = ref("Vegas Casino")
const userInput = ref([])
const generatedNumbers = ref([])



</script>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(190, 184, 184);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgb(184, 0, 0);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: hsl(0, 0%, 0%);
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(190, 184, 184);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 15px;
}

.slider.round:before {
  border-radius: 15px;
}

</style>