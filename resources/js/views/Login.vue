<template>
    <div class="container huge-m text-white special-font-2">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <div class="alert alert-danger" role="alert" v-if="error !== null">
                    {{ error }}
                </div>

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
                    <button type="submit" class="btn btn-danger" @click="handleSubmit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            error: null
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            if (this.password.length > 0) {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('api/login', {
                        email: this.email,
                        password: this.password
                    })
                        .then(response => {
                            console.log(response.data)
                            if (response.data.success) {
                                console.log('success');
                                this.$router.push('/');
                            } else {
                                this.error = response.data.message;
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                })
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        if (window.Laravel.isLoggedin) {
            return next('/');
        }
        next();
    }
}
</script>