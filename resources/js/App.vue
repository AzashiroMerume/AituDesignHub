<template>
    <header class="shadow-sm">
        <div class="header-wrap container-fluid">
            <div class="row justify-content-center align-items-center">
                <div class="col-4 d-flex justify-content-start align-items-center">
                    <img src="../css/images/menu.png" alt="menu" class="me-3" />
                    <h6 class="logo">
                        <router-link to="/" class="text-decoration-none fw-bold text-white">AituDesignHub</router-link>
                    </h6>
                </div>
                <div class="col-4 text-center">
                    <form class="d-flex" role="search">
                        <input class="search-input form-control" type="search" placeholder="Search" aria-label="Search">
                        <button class="search-btn btn btn-light" type="submit"><img src="../css/images/search.png" alt="search" width="25"/></button>
                    </form>
                </div>
                <div class="col-4 text-end">
                    <router-link to="/login" class="btn me-3 text-white">Log in</router-link>
                    <router-link to="/register" class="btn special-btn text-white">Sign in</router-link>
                </div>
            </div>
        </div>
    </header>
    <div class="main">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 vertical-menu special-font-2 shadow-sm">
                    <div class="top-menu d-flex flex-column justify-content-center align-items-start">
                        <router-link to="/" class="text-decoration-none my-3 text-white"><img
                                src="../css/images/home.png" alt="home" class="me-4" width="20" />Main</router-link>
                        <router-link to="#" class="text-decoration-none my-3 text-white"><img
                                src="../css/images/designer.png" alt="designer" class="me-4"
                                width="20" />Designers</router-link>
                        <router-link to="#" class="text-decoration-none my-3 text-white"><img
                                src="../css/images/trophy.png" alt="trophy" class="me-4"
                                width="20" />Competitions</router-link>
                        <router-link to="#" class="text-decoration-none my-3 text-white"><img
                                src="../css/images/vacancy.png" alt="vacancy" class="me-4"
                                width="19" />Vacancies</router-link>
                    </div>
                    <div class="subscriptions d-flex flex-column align-items-center">
                        <h5 class="text-white fw-light">Subscriptions</h5>
                        <div class="channels"></div>
                    </div>
                    <div class="bottom-menu text-center d-flex flex-column align-items-center">
                        <a href="#" class="text-decoration-none my-2 text-white">
                            Settings
                        </a>
                        <a href="#" class="text-decoration-none my-2 text-white">
                            Help
                        </a>
                        <a href="#" class="text-decoration-none my-2 text-white">
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