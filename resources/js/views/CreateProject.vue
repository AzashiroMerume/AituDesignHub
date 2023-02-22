<template>
    <div class="container huge-m text-dark special-font-2">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="shadow-sm py-3 px-5 border">
                    <div class="border-bottom">
                        <h3 class="h3 special-font-1" v-if="this.$router.params && this.$router.params.id">Edit Project
                        </h3>
                        <h3 class="h3 special-font-1" v-else>Create Project</h3>
                    </div>
                    <div class="my-4">
                        <label for="name" class="form-label h5">Project Name</label>
                        <div class="alert alert-danger"
                            v-if="projectStore.validationErrors && projectStore.validationErrors.name" role="alert">
                            {{ projectStore.validationErrors.name.toString() }}
                        </div>
                        <input type="text" class="form-control form-control-sm" v-model="name">
                    </div>
                    <div class="my-4">
                        <label for="description" class="form-label h5">Project Description</label>
                        <div class="alert alert-danger"
                            v-if="projectStore.validationErrors && projectStore.validationErrors.description" role="alert">
                            {{ projectStore.validationErrors.description.toString() }}
                        </div>
                        <input type="text" class="form-control form-control-sm" v-model="description">
                    </div>
                    <div class="my-4">
                        <label for="preview_img" class="form-label h5">Preview Image</label>
                        <div class="alert alert-danger"
                            v-if="projectStore.validationErrors && projectStore.validationErrors.preview" role="alert">
                            {{ projectStore.validationErrors.preview.toString() }}
                        </div>
                        <input type="file" class="form-control form-control-sm" accept="image/*" @change="onFileChange">
                    </div>
                    <button type="submit" @click.prevent="create" class="btn btn-danger">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useProjectStore } from '../stores/ProjectStore'
import { useUserStore } from '../stores/UserStore'

export default {
    name: "CreateProject",
    setup() {
        const projectStore = useProjectStore()
        const userStore = useUserStore()

        // projectStore.getMyProjects();

        return { projectStore, userStore }
    },
    data() {
        return {
            name: '',
            description: '',
            preview: '',
        }
    },
    methods: {
        create() {
            this.projectStore.createProject(this.name, this.description, this.preview)
        },
        onFileChange(e) {
            this.preview = e.target.files[0]
        },
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
    watch: {
        'projectStore.uploadCompleted': {
            immediate: true,
            async handler() {
                if (this.projectStore.uploadCompleted) {
                    this.$router.push('/myprojects')
                    this.projectStore.uploadCompleted = false
                }
            }
        }
    },
}
</script>