<template>
    <main>
        <!--Heading-->
        <header>
            <img src="./assets/pinia-logo.svg" alt="pinia logo">
            <h1>Pinia Tasks</h1>
        </header>

        <!--Task List-->
        <div class="task-list">
            <p>All tasks</p>
            <div v-for="task in TaskStore.tasks">
                <TaskDetails :task = 'task'/>
            </div>
        </div>
        <div class="task-list">
            <p>Fav tasks</p>
            <div v-for="task in TaskStore.favs">
                <TaskDetails :task = 'task'/>
            </div>
        </div>

    </main>
</template>

<script>
    import TaskDetails from './components/taskDetails.vue'
    import {useTaskStore} from './stores/TaskStore'
    export default {
        components:{
            TaskDetails
        },
        setup(){
            const TaskStore = useTaskStore()

            return{TaskStore}
        }
    }
</script>