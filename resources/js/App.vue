<template>
    <header class="shadow-sm">
        <div class="header-wrap container-fluid">
            <div class="row justify-content-center align-items-center">
                <div class="col-4">
                    <h5 class="logo">
                        <a href="#" class="text-decoration-none text-white">AituDesignHub</a>
                    </h5>
                </div>
                <div class="col-4 text-center">
                    <form class="d-flex" role="search">
                        <input class="search-input form-control" type="search" placeholder="Search" aria-label="Search">
                        <button class="search-btn btn btn-light btn-xs" type="submit"><i
                                class="fa-solid fa-magnifying-glass"></i></button>
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
            <div class="row wrap">
                <div class="col-3 vertical-menu shadow-sm">
                    <div class="top-menu d-flex flex-column align-items-start">
                        <a href="#" class="text-decoration-none my-3 text-white"><i
                                class="fa-solid fa-house me-3"></i>Main</a>
                        <a href="#" class="text-decoration-none my-3 text-white"><i
                                class="fa-solid fa-person me-3"></i>Designers</a>
                        <a href="#" class="text-decoration-none my-3 text-white"><i
                                class="fa-solid fa-trophy me-3"></i>Competitions</a>
                        <a href="#" class="text-decoration-none my-3 text-white"><i
                                class="fa-solid fa-clipboard me-3"></i>Vacancies</a>
                    </div>
                    <div class="subscriptions d-flex flex-column text-start">
                        <h6 class="text-white fw-bold">Subscriptions</h6>
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
                <div class="col-9">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>