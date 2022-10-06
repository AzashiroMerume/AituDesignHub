<template>
    <div class="mt-5 container">
        <div class="py-4">
            <h4 class="special-font-1">{{ title }}</h4>
        </div>
        <div class="row courses justify-content-center mt-3">
            <div class="col-4 p-3">Video</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
            <div class="col-4 p-3">hello</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "courses-block",
    data() {
        return {};
    },
    props: {
        title: String,
        course: {
            type: Object,
        },
    },
};
</script>
<style></style>
