import { defineStore } from 'pinia'
import axios from "axios"

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            authenticated: false,
            user_id: null,
            token: null,
        }
    },
    getters: {

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
                            if (response.data.success) {
                                console.log('success')
                            } else {
                                let error = response.data.message
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
                            if (response.data.success) {
                                console.log('success')
                            } else {
                                let error = response.data.message
                            }
                        })
                        .catch(function (error) {
                            console.error(error)
                        })
                })
            }
        }
    }
})