import { defineStore } from 'pinia'
import axios from "axios"

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            authenticated: false,
            user: null,
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.authenticated;
        }
    },
    actions: {
        async login(email, password) {
            if (password.length > 0) {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('api/login', {
                        email: email,
                        password: password
                    })
                        .then(response => {
                            console.log(response)
                            this.authenticated = true;
                            if (response.data.success) {
                                console.log('success')
                            } else {
                                console.log(response.data.message)
                            }
                        })
                        .catch(function (error) {
                            console.error(error)
                        })
                })
            }
        },
        async register(nickname, firstname, surname, email, password) {
            if (password.length > 0) {
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
                            this.authenticated = true
                            if (response.data.success) {
                                console.log('success')
                            } else {
                                console.log(response.data.message)
                            }
                        })
                        .catch(function (error) {
                            console.error(error)
                        })
                })
            }
        },
        async logout() {
            axios.get('/sacntum/csrf-cookie').then(response => {
                axios.post('api/logout')
                    .then(response => {
                        if (response.data.success) {
                            this.authenticated = false
                            console.log('logged out');
                        } else {
                            console.log('response');
                        }
                    })
                    .catch(function (error) {
                        console.error(error)
                    })
            })
        }
    }
})