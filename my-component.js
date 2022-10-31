export default {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    mounted() {
        console.log(`The initial count value is ${count}`);
    },
    template: /*html*/`<button @click="increment">Count is {{count}}</button>`
};