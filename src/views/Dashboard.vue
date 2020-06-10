<template>
    <div class="Dashboard">
        <v-container>
            <v-row justify="center" class="text-center">
                <v-col cols="12" md="1" sm="12">
                    <img src="../assets/cesi_logo.png" alt="cesi logo" width="167">
                </v-col>
                <v-col cols="12" md="11" sm="12">
                    <div v-if="$store.getters.user.id_usertype === 1">
                        <CESIDash/>
                    </div>
                    <div v-else>
                        <ClientDash/>
                    </div>
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
                        let usertypeId = this.$store.getters.user.id_usertype
                        this.$store.dispatch('logout')
                        if(usertypeId === 1) {
                            this.$router.push('/Login/CESI')
                        }
                        else {
                            this.$router.push('/Login/Client')
                        }
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