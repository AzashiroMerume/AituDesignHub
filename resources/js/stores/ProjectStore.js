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
        async createProject(name, description, preview_img) {
            let formData = new FormData()
            formData.append('preview', this.preview_img)
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/create', {
                    name: name,
                    description: description,
                    preview: formData,
                }, {
                    headers: {
                        'content-type': 'multipart/form-data',
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