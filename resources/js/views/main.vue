<template>
    <jumbotron-block></jumbotron-block>
    <projects-block :data="array"></projects-block>
</template>
<script>
import JumbotronBlock from '../components/Jumbotron.vue';
import ProjectsBlock from '../components/Projects.vue';

export default {
    name: 'main',
    data() {
        return {
            array: [
                'Hey',
                'valdsfa',
                'f',
                'You',
                'My',
                'Old',
                'Dear',
                'Friend'
            ]
        }
    },
    components: {
        JumbotronBlock,
        ProjectsBlock,
    }
}
</script>
<style>

</style>