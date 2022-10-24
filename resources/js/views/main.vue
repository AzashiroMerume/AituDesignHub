<template>
    <header-block></header-block>
    <jumbotron-block></jumbotron-block>
    <projects-block></projects-block>
    <footer-block></footer-block>
</template>
<script>
import HeaderBlock from '../components/Header.vue';
import JumbotronBlock from '../components/Jumbotron.vue';
import ProjectsBlock from '../components/Projects.vue';
import FooterBlock from '../components/Footer.vue';

export default {
    name: 'main',
    data() {
        return {

        }
    },
    components: {
        HeaderBlock,
        JumbotronBlock,
        ProjectsBlock,
        FooterBlock
    }
}
</script>
<style>

</style>