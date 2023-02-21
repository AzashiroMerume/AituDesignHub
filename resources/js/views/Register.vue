<template>
    <div class="auth container-fluid huge-m text-dark special-font-2 my-5">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-8 d-flex flex-column justify-content-center align-items-center">
                <div class="alert alert-danger" role="alert" v-if="userStore.error">
                    {{ userStore.error }}
                </div>

                <div class="shadow-sm py-5 px-5 border auth-form mb-5">
                    <div class="border-bottom">
                        <h3 class="h3 special-font-1">Registration</h3>
                    </div>
                    <div class="my-3">
                        <p>Already logged in? <router-link to="/login">Login</router-link></p>
                    </div>
                    <div class="my-4">
                        <label for="nickname" class="form-label h5">Nickname</label>
                        <div class="alert alert-danger"
                            v-if="userStore.validationErrors && userStore.validationErrors.nickname" role="alert">
                            {{ userStore.validationErrors.nickname.toString() }}
                        </div>
                        <input type="text" class="form-control form-control-sm" v-model="nickname">
                    </div>
                    <div class="my-4">
                        <label for="firstname" class="form-label h5">Firstname</label>
                        <div class="alert alert-danger"
                            v-if="userStore.validationErrors && userStore.validationErrors.firstname" role="alert">
                            {{ userStore.validationErrors.firstname.toString() }}
                        </div>
                        <input type="text" class="form-control form-control-sm" v-model="firstname">
                    </div>
                    <div class="my-4">
                        <label for="surname" class="form-label h5">Surname</label>
                        <div class="alert alert-danger"
                            v-if="userStore.validationErrors && userStore.validationErrors.surname" role="alert">
                            {{ userStore.validationErrors.surname.toString() }}
                        </div>
                        <input type="text" class="form-control form-control-sm" v-model="surname">
                    </div>
                    <div class="my-4">
                        <label for="email" class="form-label h5">Email</label>
                        <div class="alert alert-danger"
                            v-if="userStore.validationErrors && userStore.validationErrors.email" role="alert">
                            {{ userStore.validationErrors.email.toString() }}
                        </div>
                        <input type="email" class="form-control form-control-sm" v-model="email">
                    </div>
                    <div class="my-4">
                        <label for="password" class="form-label h5">Password</label>
                        <div class="alert alert-danger"
                            v-if="userStore.validationErrors && userStore.validationErrors.password" role="alert">
                            {{ userStore.validationErrors.password.toString() }}
                        </div>
                        <input type="password" class="form-control form-control-sm" v-model="password">
                    </div>
                    <button type="submit" @click.prevent="register" class="btn btn-danger">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '../stores/UserStore'

export default {
    name: 'register',
    setup() {
        const userStore = useUserStore()

        return { userStore }
    },
    data() {
        return {
            nickname: "",
            firstname: "",
            surname: "",
            email: "",
            password: "",
        }
    },
    methods: {
        async register() {
            try {
                await this.userStore.register(this.nickname, this.firstname, this.surname, this.email, this.password)
            } catch (error) {
                console.log(error)
            }
        }
    },
    watch: {
        'userStore.isAuthenticated': {
            immediate: true,
            async handler() {
                if (this.userStore.isAuthenticated) {
                    this.$router.push('/')
                }
            }
        }
    },
}
</script>