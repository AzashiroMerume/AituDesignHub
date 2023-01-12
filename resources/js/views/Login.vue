<template>
    <div class="container huge-m text-dark special-font-2">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <div class="alert alert-danger" role="alert" v-if="userStore.error !== null">
                    {{ userStore.error }}
                </div>
                <validation-errors v-if="userStore.validationErrors"
                    :errors="userStore.validationErrors"></validation-errors>

                <div class="shadow-sm py-3 px-5 border">
                    <div class="border-bottom">
                        <h3 class="h3 special-font-1">Login</h3>
                    </div>
                    <div class="my-4">
                        <label for="email" class="form-label h5">Email</label>
                        <input type="email" class="form-control form-control-sm" v-model="email">
                    </div>
                    <div class="my-4">
                        <label for="password" class="form-label h5">Password</label>
                        <input type="password" class="form-control form-control-sm" v-model="password">
                    </div>
                    <button type="submit" @click.prevent="login" class="btn btn-danger">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ValidationErrors from '../components/ValidationErrors.vue'
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
    components: {
        ValidationErrors
    }
}
</script>