import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: 'buy milk', isFav: false },
            { id: 2, title: 'play monopoly', isFav: true }
        ]
    }),

    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav);
        }
    }

});