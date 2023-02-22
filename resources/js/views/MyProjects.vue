<template>
    <div class="home p-4 text-dark">
        <div class="home-heading">
            <div class="row align-items-center">
                <div class="col-8">
                    <h3 class="display-6 text-dark">My projects</h3>
                </div>
                <div class="col-4 px-5 text-end">
                    <router-link to="/create" class="btn btn-success">Create Project</router-link>
                </div>
            </div>
            <hr class="feature-divider">
        </div>
        <div class="home-body">
            <projects-block :projects="myprojects" :isMineProjects="true"></projects-block>
        </div>
    </div>
</template>

<script>
import ProjectsBlock from '../components/ProjectsBlock.vue'
import { useProjectStore } from '../stores/ProjectStore'
import { useUserStore } from '../stores/UserStore'

export default {
    name: "MyProjects",
    setup() {
        const projectStore = useProjectStore()
        const userStore = useUserStore()

        projectStore.getMyProjects()

        return { projectStore, userStore }
    },
    computed: {
        myprojects() {
            return this.projectStore.allMyProjects
        }
    },
    watch: {
        'userStore.isAuthenticated': {
            immediate: true,
            async handler() {
                if (!this.userStore.isAuthenticated) {
                    this.$router.push('/login')
                }
            }
        }
    },
    components: {
        ProjectsBlock
    }
}


</script>