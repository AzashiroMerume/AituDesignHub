<template>
    <header class="py-2 border-bottom">
        <div class="container">
            <div class="row justify-content-center align-items-center text-center">
                <div class="col-3">
                    <h5 class="logo font-weight-normal m-0">
                        <router-link to="/" class="special-font-1 text-decoration-none text-dark">AituDesignHub
                        </router-link>
                    </h5>
                </div>
                <div class="col-6 menu special-font-2">
                    <router-link to="/" class="text-decoration-none text-dark mx-5">Projects</router-link>
                    <router-link to="/designers" class="text-decoration-none text-dark mx-5">Designers</router-link>
                    <router-link to="/teams" class="text-decoration-none text-dark mx-5">Teams</router-link>
                    <router-link to="/competions" class="text-decoration-none text-dark mx-5">Competitons</router-link>
                </div>
                <div class="col-3 auth special-font-2 m-0">
                    <router-link to="/login" class="text-decoration-none text-dark mx-3">Login</router-link>
                    <router-link to="/register" class="btn btn-primary text-white mx-3 special-btn-1">Register
                    </router-link>
                </div>
            </div>
        </div>
    </header>
    <router-view />
    <footer class="border-top mt-3">
        <div class="container">
            <div class="row jusitify-content-center text-center align-items-center py-3">
                <div class="col-12 menu special-font-2">
                    <router-link to="/" class="text-decoration-none text-dark mx-4">Projects</router-link>
                    <router-link to="/designers" class="text-decoration-none text-dark mx-4">Designers</router-link>
                    <router-link to="/teams" class="text-decoration-none text-dark mx-4">Teams</router-link>
                    <router-link to="/competions" class="text-decoration-none text-dark mx-4">Competitons</router-link>
                    <router-link to="/suggestions" class="text-decoration-none text-dark mx-4">Suggestions</router-link>
                    <router-link to="/help" class="text-decoration-none text-dark mx-4">Help</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>