import { defineStore } from 'pinia'
import axios from "axios"

export const useProjectStore = defineStore('project', {
    state: () => {
        return {
            projects: [],
        };
    },
    getters: {
        allProjects(state) {
            return state.projects
        }
    },
    actions: {
        async getProjects() {
            try {
                const res = await axios.get(`http://localhost/api/projects`)
                this.projects = res.data
            } catch (error) {
                return error
            }
        }
    }
})