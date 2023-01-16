<template>
    <div class="h-100">
        <header class="shadow-sm d-flex justify-content-center align-items-center">
            <h4 class="logo">
                <router-link to="/" class="text-decoration-none text-dark">AituDesignHub</router-link>
            </h4>
        </header>

        <router-view />
    </div>
</template>

<script>
import { useUserStore } from '../stores/UserStore'

export default {
    name: 'authLayout',
    setup() {
        const userStore = useUserStore()

        return { userStore }
    },
    data() {
        return {
            
        }
    }
}
</script>