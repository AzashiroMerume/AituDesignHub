<template>
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
<script>
export default {
    name: 'Footer',
}
</script>
<style>

</style>