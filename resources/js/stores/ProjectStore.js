import { defineStore } from 'pinia'
import axios from "axios"

export const useProjectStore = defineStore('project', {
    state: () => {
        return {
            projects: [],
            myprojects: [],
            validationErrors: null,
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
                return error
            }
        },
        async getMyProjects() {
            try {
                const res = await axios.get('http://localhost/api/myprojects')
                this.myprojects = res.data
            } catch (error) {
                return error
            }
        },
        async createProject(name, description, preview) {
            let formData = new FormData()
            formData.append('name', name)
            formData.append('description', description);
            formData.append('preview', preview)
            console.log(preview);
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/create', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(response => {
                        if (response.data.success) {
                            console.log(response)
                        } else {
                            console.log('response')
                        }
                    })
                    .catch(function (error) {
                        console.error(error)
                    })
            })
        },
        async deleteProject(id) {
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/delete', {
                    id: id
                })
                    .then(response => {
                        console.log(response)
                        if (response.data.success) {
                            console.log(response)
                        } else {
                            console.log('response')
                        }
                    })
                    .catch(function (error) {
                        console.error(error)
                    })
            })
        }
    }
})