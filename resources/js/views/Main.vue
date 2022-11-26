<template>
    <div class="home p-4">
        <div class="home-heading">
            <h3 class="display-5 text-white">Popular projects</h3>
            <div class="home-category">
                <select name="category" class="text-decoration-none" id="home-category">
                    <option value="popular" selected>By popularity</option>
                    <option value="last" selected>By last update</option>
                    <option value="popular" selected>By likes</option>
                </select>
            </div>
        </div>
        <div class="home-body">

        </div>
    </div>
</template>
<script>

export default {
    name: 'main',
    data() {
        return {

        }
    }
}
</script>
<style>

</style>