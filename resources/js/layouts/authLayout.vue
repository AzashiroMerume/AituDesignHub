<template>
    <router-view />
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