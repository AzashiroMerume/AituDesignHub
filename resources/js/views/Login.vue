<template>
    <div class="auth container-fluid huge-m text-dark special-font-2">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-8 d-flex flex-column justify-content-center align-items-center">
                <div class="alert alert-danger" role="alert" v-if="userStore.error !== null">
                    {{ userStore.error }}
                </div>

                <div class="shadow-sm py-5 px-5 border auth-form my-5">
                    <div class="border-bottom">
                        <h3 class="h3 special-font-1">Login</h3>
                    </div>
                    <div class="my-3">
                        <p>Don't have an account? <router-link to="/register">Sign up</router-link></p>
                    </div>
                    <div class="my-5">
                        <label for="email" class="form-label h5">Email</label>
                        <div class="alert alert-danger"
                            v-if="userStore.validationErrors && userStore.validationErrors.email" role="alert">
                            {{ userStore.validationErrors.email.toString() }}
                        </div>
                        <input type="email" class="form-control form-control-sm" v-model="email">
                    </div>
                    <div class="my-5">
                        <label for="password" class="form-label h5">Password</label>
                        <div class="alert alert-danger"
                            v-if="userStore.validationErrors && userStore.validationErrors.password" role="alert">
                            {{ userStore.validationErrors.password.toString() }}
                        </div>
                        <input type="password" class="form-control form-control-sm" v-model="password">
                    </div>
                    <button type="submit" @click.prevent="login" class="btn btn-danger">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '../stores/UserStore'

export default {
    name: 'login',
    setup() {
        const userStore = useUserStore()

        return { userStore }
    },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async login() {
            try {
                await this.userStore.login(this.email, this.password)
            } catch (error) {
                console.error(error)
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