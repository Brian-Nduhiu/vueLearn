
//Options API

// export default {
//     data() {
//         return {
//             count: 0
//         };
//     },
//     methods: {
//         increment() {
//             this.count++;
//         }
//     },
//     mounted() {
//         console.log(`The initial count value is ${count}`);
//     },
//     template: /*html*/`<button @click="increment">Count is {{count}}</button>`
// };

//Composition API

// import { ref } from 'vue';
// export default {

//     setup() {
//         const count = ref(0);
//         return {
//             count
//         };
//     },
//     mounted() {
//         console.log(`The initial value of count is: ${this.count}`);
//     },
//     template: /*html*/`<button @click="count++">Count is {{count}}</button>`
// };