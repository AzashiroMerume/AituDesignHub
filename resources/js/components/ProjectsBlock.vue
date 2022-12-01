<template>
    <div class="projects">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                {{ project.project_name }}
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'ProjectBlock',
    data() {
        return {

        }
    },
    props: {
        projects: Array,
    }
}
</script>
<style>

</style>