<template>
    <component :is="$route.meta.layoutComponent">
        <slot />
    </component>
</template>
<script>
import { useUserStore } from './stores/UserStore'

export default {
    setup() {
        const userStore = useUserStore()

        return { userStore }
    },
    created() {
        this.userStore.authenticated = window.authUser.authenticated
        this.userStore.user = window.authUser.user
    },
    methods: {
        logout() {
            this.userStore.logout()
        },
    },
}
</script>