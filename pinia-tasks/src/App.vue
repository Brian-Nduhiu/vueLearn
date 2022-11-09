<template>
    <main>
        <!--Heading-->
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia logo">
            <h1>Pinia Tasks</h1>
        </header>

        <!--filter-->
        <nav class="filter">
            <button @click="filter = 'all'">All tasks</button>
            <button @click="filter = 'favs'">Fav tasks</button>
        </nav>


        <!--Task List-->
        <div class="task-list" v-if="filter === 'all'">
            <p>All tasks</p>
            <div v-for="task in TaskStore.tasks">
                <TaskDetails :task = 'task'/>
            </div>
        </div>
        <div class="task-list" v-if="filter === 'favs'">
            <p>Fav tasks</p>
            <div v-for="task in TaskStore.favs">
                <TaskDetails :task = 'task'/>
            </div>
        </div>

    </main>
</template>

<script>
    import { ref } from 'vue';
    import TaskDetails from './components/taskDetails.vue'
    import {useTaskStore} from './stores/TaskStore'
    export default {
        components:{
            TaskDetails
        },
        setup(){
            const TaskStore = useTaskStore()

            const filter = ref('all')

            return{TaskStore, filter}
        }
    }
</script>