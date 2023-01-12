<template>
    <div v-for="error_arr in errors">
        <div class="alert alert-danger" role="alert" v-for="error in error_arr">
            <span>{{ error }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ValidationErrors',
    // data() {
    //     return {

    //     }
    // },
    props: ['errors'],
    computed: {
        validationErrors() {
            console.log(this.errors)
        }
    }
}

</script>