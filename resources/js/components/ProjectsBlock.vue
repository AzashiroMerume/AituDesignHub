<template>
    <div class="projects text-center">
        <div class="row p-4">
            <div class="col-md-4" v-for="project in projects">
                <div class="card mb-4" style="width: 20rem;">
                    <img class="card-img-top" :src="project.preview_url" :alt="project.preview_name" loading="lazy">
                    <div class="card-body">
                        <h4>{{ project.name }}</h4>
                        <p class="card-text">{{ project.description }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <router-link :to="{ name: 'ViewProject', query: { id: project._id } }" class="btn btn-sm btn-success">View</router-link>
                                <router-link v-if="isMineProjects" :to="{
                                    name: 'CreateProject', query: { id: project._id }
                                }" type="button" class="btn text-white btn-sm btn-primary">Edit</router-link>
                                <button v-if="isMineProjects" type="submit" @click.prevent="deleteOne(project._id)"
                                    class="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useProjectStore } from '../stores/ProjectStore'

export default {
    name: 'ProjectsBlock',
    setup() {
        const projectStore = useProjectStore()

        return { projectStore }
    },
    methods: {
        deleteOne(id) {
            this.projectStore.deleteProject(id)
        }
    },
    props: {
        projects: Object,
        isMineProjects: Boolean,
    }
}
</script>
<style></style>