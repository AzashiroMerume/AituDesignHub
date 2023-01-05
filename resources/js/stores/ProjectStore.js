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
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/create', {
                    name: name,
                    description: description,
                    preview_img: preview_img,
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
        }
    }
})