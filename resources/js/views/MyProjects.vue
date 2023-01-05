<template>
    <div class="home p-4">
        <div class="home-heading">
            <div class="row align-items-center">
                <div class="col-8">
                    <h3 class="display-6 text-white">My projects</h3>
                </div>
                <div class="col-4">
                    <router-link to="/create" class="btn btn-success">Create Project</router-link>
                </div>
            </div>
        </div>
        <div class="home-body">
            <projects-block :projects="myprojects"></projects-block>
        </div>
    </div>
</template>

<script>
import ProjectsBlock from '../components/ProjectsBlock.vue'
import { useProjectStore } from '../stores/ProjectStore'

export default {
    name: "MyProjects",
    setup() {
        const projectStore = useProjectStore()
        projectStore.getMyProjects();
        return { projectStore }
    },
    data() {
        return {

        }
    },
    computed: {
        myprojects() {
            return this.projectStore.allProjects;
        }
    },
    components: {
        ProjectsBlock
    }
}


</script>