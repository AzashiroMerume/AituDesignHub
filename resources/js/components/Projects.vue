<template>
    <div class="projects">
        <div class="container">
            <div class="row text-center">
                <div class="col-12 project-header text-center my-2">
                    <h1 class="special-font-1 fw-normal">Last Designs</h1>
                </div>
                <div
                    class="col-12 my-2 project-type d-flex justify-content-center special-font-2 border-top border-bottom py-3">
                    <button @click="changeContent('projects')" class="btn btn-outline-primary text-decoration-none mx-5"
                        v-bind:class="{ active: typeButtons.projectButton }">Projects</button>
                    <button @click="changeContent('images')" class="btn btn-outline-primary text-decoration-none mx-5"
                        v-bind:class="{ active: typeButtons.imageButton }">Images</button>
                    <button @click="changeContent('prototypes')"
                        class="btn btn-outline-primary text-decoration-none mx-5"
                        v-bind:class="{ active: typeButtons.prototypeButton }">Prototypes</button>
                </div>
                <div class="col-12 my-2 project-body">
                    <div class="row">
                        <div class="col-md-4 projects-card" v-for="(project, index) of projects">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top"
                                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                    alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;"
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1840efeee4b%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1840efeee4b%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.39999771118164%22%20y%3D%22120.41999988555908%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    data-holder-rendered="true">
                                <div class="card-body">
                                    <p class="card-text">{{ project }}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Projects',
    props: {
        data: Array
    },
    data() {
        return {
            projects: this.data,
            typeButtons: {
                'projectButton': true,
                'imageButton': false,
                'prototypeButton': false,
            },
        }
    },
    methods: {
        changeActiveBtn(type) {
            if (type === 'projects') {
                this.typeButtons.imageButton = false;
                this.typeButtons.prototypeButton = false;
                this.typeButtons.projectButton = true;
            } else if (type === 'images') {
                this.typeButtons.prototypeButton = false;
                this.typeButtons.projectButton = false;
                this.typeButtons.imageButton = true;
            } else {
                this.typeButtons.projectButton = false;
                this.typeButtons.imageButton = false;
                this.typeButtons.prototypeButton = true;
            }
        },
        changeContent(type) {
            this.changeActiveBtn(type);
            if (type === 'projects') {
                console.log('projects');
            } else if (type === 'images') {
                console.log('images');
            } else {
                console.log('prototypes');
            }
        }
    },
}
</script>
<style>

</style>