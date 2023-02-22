<template>
    <div class="container-fluid huge-m text-dark special-font-2 px-5">
        <div class="row justify-content-center">
            <h4 class="display-2 special-font-1">{{ project.name }}</h4>
            <hr class="feature-divider">
            <div class="py-3">
                <h3>Description:</h3>
                <p class="lead">{{ project.description }}</p>
            </div>
            <hr class="feature-divider">
            <div class="py-3">
                <h3>Images:</h3>

            </div>
            <hr class="feature-divider">
            <div class="py-3">
                <router-link v-if="owner" :to="{
                    name: 'CreateProject', query: { id: project._id }
                }" type="button" class="btn text-white btn-sm btn-primary mx-3">Edit</router-link>
                <button v-if="owner" type="submit" @click.prevent="deleteOne(project._id)"
                    class="btn btn-sm btn-danger mx-3">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useProjectStore } from '../stores/ProjectStore'
import { useUserStore } from '../stores/UserStore'

export default {
    name: "EditProject",
    setup() {
        const projectStore = useProjectStore()
        const userStore = useUserStore()

        return { projectStore, userStore }
    },
    computed: {
        project() {
            return this.projectStore.viewProject
        },
        owner() {
            console.log(this.projectStore.viewProject.owner_id, "owner")
            console.log(this.userStore.user._id, "user")
            if (this.projectStore.viewProject.owner_id == this.userStore.user._id) {
                return true;
            }
            return false;
        }
    },
    created() {
        this.projectStore.getProjectById(this.$route.query.id)
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
}
</script>