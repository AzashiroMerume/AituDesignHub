<template>
    <footer class="border-top mt-3">
        <div class="container row text-center align-items-center py-3">
            <div class="col-6">
                <h6 class="m-0">
                    <router-link to="/" class="special-font-1 text-decoration-none text-dark">AituDesignHub
                    </router-link>
                </h6>
            </div>
            <div class="col-6 menu">
                <router-link to="/" class="text-decoration-none text-dark mx-4">Projects</router-link>
                <router-link to="/teams" class="text-decoration-none text-dark mx-4">Teams</router-link>
                <router-link to="/competions" class="text-decoration-none text-dark mx-4">Competitons</router-link>
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