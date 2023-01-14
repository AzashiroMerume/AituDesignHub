import { defineStore } from 'pinia'
import axios from "axios"

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            authenticated: false,
            user: null,
            error: null,
            validationErrors: null,
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.authenticated
        },
        getUser(state) {
            return state.user
        },
        allErrors(state) {
            return state.error
        }
    },
    actions: {
        async login(email, password) {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('api/login', {
                    email: email,
                    password: password
                })
                    .then(response => {
                        console.log(response)
                        if (response.data.success) {
                            console.log('successs')
                            this.authenticated = true
                            this.user = response.data.user
                            this.error = null
                            this.validationErrors = null
                        } else {
                            console.log(response.data.message)
                            this.error = response.data.message
                        }
                    })
                    .catch(error => {
                        if (error.response.status == 422) {
                            this.validationErrors = error.response.data.errors
                        }
                    })
            })
        },
        async register(nickname, firstname, surname, email, password) {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('api/register', {
                    nickname: nickname,
                    firstname: firstname,
                    surname: surname,
                    email: email,
                    password: password
                })
                    .then(response => {
                        console.log(response)
                        if (response.data.success) {
                            console.log('success')
                            this.authenticated = true
                            this.user = response.data.user
                            this.error = null
                            this.validationErrors = null
                        } else {
                            console.log(response.data.message)
                            this.error = response.data.message
                        }
                    })
                    .catch(error => {
                        if (error.response.status == 422) {
                            console.log(error.response)
                            this.validationErrors = error.response.data.errors
                        }
                    })
            })

        },
        async logout() {
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/logout')
                    .then(response => {
                        if (response.data.success) {
                            this.authenticated = false
                            this.user = null
                            this.error = null
                            console.log(response.data.message)
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