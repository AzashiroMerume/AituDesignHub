<template>
    <div class="home p-4">
        <div class="home-heading">
            <h3 class="display-6">Popular projects</h3>
            <div class="home-category">
                <select name="category" class="text-decoration-none" id="home-category">
                    <option value="popular" selected>By popularity</option>
                    <option value="last" selected>By last update</option>
                    <option value="popular" selected>By likes</option>
                </select>
            </div>
            <hr class="feature-divider">
        </div>
        <div class="home-body">
            <projects-block :projects="projects" :isMineProjects="false"></projects-block>
        </div>
    </div>
</template>
<script>
import ProjectsBlock from '../components/ProjectsBlock.vue'
import { useProjectStore } from '../stores/ProjectStore'

export default {
    name: 'Home',
    setup() {
        const projectStore = useProjectStore()

        projectStore.getProjects()
        
        return { projectStore }
    },
    computed: {
        projects() {
            return this.projectStore.allProjects
        }
    },
    components: {
        ProjectsBlock
    }
}
</script>
<style>

</style>