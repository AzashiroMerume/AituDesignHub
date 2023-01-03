<template>
    <div class="alert alert-danger" role="alert">
        <ul>
            <li v-for="(value) in validationErrors">{{ value }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ValidationErrors',
    data() {
        return {

        }
    },
    props: {
        errors: Array
    },
    computed: {
        validationErrors() {
            let errors = Object.values(this.errors)
            errors.flat();
            return errors;
        }
    }
}

</script>