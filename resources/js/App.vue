<template>
    <header class="shadow-sm">
        <div class="header-wrap container-fluid">
            <div class="row justify-content-center align-items-center">
                <div class="col-4 d-flex justify-content-start align-items-center">
                    <img src="../css/images/menu.png" alt="menu" class="me-3" width="25" />
                    <h6 class="logo">
                        <router-link to="/" class="text-decoration-none fw-bold text-dark">AituDesignHub</router-link>
                    </h6>
                </div>
                <div class="col-4 text-center">
                    <form class="d-flex" role="search">
                        <input class="search-input form-control" type="search" placeholder="Search" aria-label="Search">
                        <button class="search-btn btn btn-danger border-white" type="submit"><img
                                src="../css/images/search.png" alt="search" width="25" /></button>
                    </form>
                </div>
                <div class="col-4 text-end" v-if="userStore.isAuthenticated">
                    <router-link to="/myprojects" class="text-decoration-none me-5 ">{{
                        userStore.getUser.nickname
                    }}</router-link>
                    <a class="btn btn-danger me-5 " style="cursor: pointer;" @click="logout">Logout</a>
                </div>
                <div class="col-4 text-end" v-else="userStore.isAuthenticated">
                    <router-link to="/login" class="btn me-3 ">Log in</router-link>
                    <router-link to="/register" class="btn special-btn ">Sign in</router-link>
                </div>
            </div>
        </div>
    </header>
    <div class="main">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 vertical-menu special-font-2 shadow-sm">
                    <div class="top-menu d-flex flex-column justify-content-center align-items-start border-bottom">
                        <router-link to="/" class="text-decoration-none my-3 text-dark"><img
                                src="../css/images/home.png" alt="home" class="me-4" width="20" />Main</router-link>
                        <router-link to="#" class="text-decoration-none my-3 text-dark"><img
                                src="../css/images/designer.png" alt="designer" class="me-4"
                                width="20" />Designers</router-link>
                        <router-link to="#" class="text-decoration-none my-3 text-dark"><img
                                src="../css/images/trophy.png" alt="trophy" class="me-4"
                                width="20" />Competitions</router-link>
                        <router-link to="#" class="text-decoration-none my-3 text-dark"><img
                                src="../css/images/vacancy.png" alt="vacancy" class="me-4"
                                width="19" />Vacancies</router-link>
                    </div>
                    <div class="subscriptions d-flex flex-column align-items-center">
                        <h5 class="fw-light">Subscriptions</h5>
                        <div class="channels"></div>
                    </div>
                    <div class="bottom-menu border-top text-center d-flex flex-column align-items-center">
                        <a href="#" class="text-decoration-none my-2 text-dark">
                            Settings
                        </a>
                        <a href="#" class="text-decoration-none my-2 text-dark">
                            Help
                        </a>
                        <a href="#" class="text-decoration-none my-2 text-dark">
                            Send Feedback
                        </a>
                    </div>
                </div>
                <div class="col-10 special-font-1">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useUserStore } from './stores/UserStore'

export default {
    setup() {
        const userStore = useUserStore()

        return { userStore }
    },
    mounted() {
        this.userStore.authenticated = window.authUser.authenticated
        this.userStore.user = window.authUser.user
        console.log(this.userStore.user)
    },
    methods: {
        logout() {
            this.userStore.logout()
        }
    }
}
</script>