<template>
    <div class="Dashboard">
        <v-container>
            <v-row justify="center" class="text-center">
                <v-col cols="12" md="1" sm="12">
                    <img src="../assets/cesi_logo.png" alt="cesi logo" width="167">
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <div v-if="$store.getters.user.id_usertype === 1">
                        <CESIDash/>
                    </div>
                    <div v-else>
                        <ClientDash/>
                    </div>
                </v-col>
                <v-col cols="12" md="1" sm="12">
                    <img src="../assets/fablab.png" alt="fablab logo" width="142" class="">
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import CESIDash from "../components/CESIDash";
    import ClientDash from "../components/ClientDash";
    import usersApi from '../api/users'
    export default {
        name: "Dashboard",
        components: {ClientDash, CESIDash},
        methods: {
            checkLogin() {
                usersApi.getProfile().then(resp => {
                    if(resp.Error) {
                        this.$store.dispatch('logout')
                        this.$router.push('/Login')
                    }
                })
            }
        },
        mounted() {
            this.checkLogin()
        }
    }
</script>

<style scoped>

</style>