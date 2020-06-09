<template>
    <div class="Dashboard">
        <div v-if="$store.getters.user.id_usertype === 1">
            <CESIDash/>
        </div>
        <div v-else>
            <ClientDash/>
        </div>
    </div>
</template>

<script>
    import CESIDash from "../components/CESIDash";
    import ClientDash from "../components/ClientDash";
    export default {
        name: "Dashboard",
        components: {ClientDash, CESIDash}
    }
</script>

<style scoped>

</style>