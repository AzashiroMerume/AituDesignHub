<template>
    <footer class="border-top mt-3">
        <div class="container">
            <div class="row jusitify-content-center text-center align-items-center py-3">
                <div class="col-6 logo">
                    <h6 class="m-0">
                        <router-link to="/" class="special-font-1 text-decoration-none text-dark">AituDesignHub
                        </router-link>
                    </h6>
                </div>
                <div class="col-6 menu special-font-2">
                    <router-link to="/" class="text-decoration-none text-dark mx-4">Projects</router-link>
                    <router-link to="/designers" class="text-decoration-none text-dark mx-4">Designers</router-link>
                    <router-link to="/teams" class="text-decoration-none text-dark mx-4">Teams</router-link>
                    <router-link to="/competions" class="text-decoration-none text-dark mx-4">Competitons</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
}
</script>
<style>

</style>