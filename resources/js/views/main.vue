<template>
    <header-block></header-block>
    <best-popular-block></best-popular-block>
    <hr class="mt-5" />
    <courses-block title="Recomendations"></courses-block><br>
    <footer-block class="mt-5"></footer-block>
</template>
<script>
import HeaderBlock from '../components/header.vue';
import BestPopularBlock from '../components/bestpopular.vue';
import CoursesBlock from '../components/courses.vue';
import FooterBlock from '../components/footer.vue';

export default {
    name: "main",
    data() {
        return {

        };
    },
    components: {
        HeaderBlock,
        BestPopularBlock,
        CoursesBlock,
        FooterBlock,
    }
};
</script>