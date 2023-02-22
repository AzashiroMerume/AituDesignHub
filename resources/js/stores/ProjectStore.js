import { defineStore } from 'pinia'
import axios from "axios"

export const useProjectStore = defineStore('project', {
    state: () => {
        return {
            projects: [],
            myprojects: [],
            errors: null,
            validationErrors: null,
            uploadCompleted: false,
        };
    },
    getters: {
        allProjects(state) {
            return state.projects
        },
        allMyProjects(state) {
            return state.myprojects
        }
    },
    actions: {
        async getProjects() {
            try {
                const res = await axios.get('http://localhost/api/projects')
                this.projects = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async getMyProjects() {
            try {
                const res = await axios.get('http://localhost/api/myprojects')
                this.myprojects = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async createProject(name, description, preview) {
            let formData = new FormData()
            formData.append('name', name)
            formData.append('description', description)
            formData.append('preview', preview)
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/create', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(response => {
                        if (response.data.success) {
                            this.uploadCompleted = true
                            this.errors = null
                            this.validationErrors = null
                        } else {
                            console.log(response.data.message)
                            this.errors = response.data.message
                        }
                    })
                    .catch(error => {
                        if (error.response.status == 422) {
                            this.validationErrors = error.response.data.errors
                        }
                    })
            })
        },
        async editProject(project_id, owner_id, name, description, preview) {
            let formData = new FormData()
            formData.append('project_id', project_id)
            formData.append('owner_id', owner_id)
            formData.append('name', name)
            formData.append('description', description)
            formData.append('preview', preview)
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/edit', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(response => {
                        if (response.data.success) {
                            this.uploadCompleted = true
                            this.errors = null
                            this.validationErrors = null
                        } else {
                            console.log(response.data.message)
                            this.errors = response.data.message
                        }
                    })
                    .catch(error => {
                        if (error.response.status == 422) {
                            this.validationErrors = error.response.data.errors
                        }
                    })
            }) 
        },
        async deleteProject(id) {
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/delete', {
                    id: id
                })
                    .then(response => {
                        if (response.data.success) {
                            this.getProjects();
                            this.getMyProjects();
                        } else {
                            console.log(response.data.message)
                            this.error = response.data.message
                        }
                    })
                    .catch(function (error) {
                        console.error(error)
                    })
            })
        }
    }
})