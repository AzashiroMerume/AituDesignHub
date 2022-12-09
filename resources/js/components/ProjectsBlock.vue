<template>
    <div class="projects text-center">
        <div class="row p-4">
            <div class="col-md-4" v-for="project in projects">
                <div class="card mb-4">
                    <img class="card-img-top" src="" alt="content">
                    <div class="card-body">
                        <h4>{{ project.name }}</h4>
                        <p class="card-text">{{ project.description }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-muted">{{ project.updated_at }}</small>
                        </div>
                    </div>
                </div>
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