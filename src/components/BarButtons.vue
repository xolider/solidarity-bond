<template>
    <div class="BarButtons">
        <div v-if="!$store.getters.isLogged">
            <div class="hidden-md-and-up">
                <v-menu>
                    <template v-slot:activator="{on}">
                        <v-btn icon v-on="on">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item-group>
                            <v-list-item href="mailto:clement.vicart@viacesi.fr">
                                <v-list-item-title>{{buttonsBar[0].title}} <v-icon class="ml-1">mdi-open-in-new</v-icon></v-list-item-title>
                            </v-list-item>
                            <v-list-item v-for="(button, i) in buttonsBar.slice(1)" :key="i" :href="button.click">
                                <v-list-item-title v-text="button.title"></v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
            </div>
            <div class="hidden-sm-and-down">
                <v-btn text href="mailto:clement.vicart@viacesi.fr">{{this.buttonsBar[0].title}} <v-icon class="ml-1">mdi-open-in-new</v-icon></v-btn>
                <v-btn v-for="(button, i) in buttonsBar.slice(1)" :key="i" outlined :href="button.click" class="ml-2">
                    {{button.title}}
                </v-btn>
            </div>
        </div>
        <div v-else>
            <div class="hidden-sm-and-down">
                <v-btn text href="/#/Dashboard">
                    {{$store.getters.user.name}}
                </v-btn>
                <v-btn outlined @click="logout">
                    Déconnexion
                </v-btn>
            </div>
            <div class="hidden-md-and-up">
                <v-menu>
                    <template v-slot:activator="{on}">
                        <v-btn icon v-on="on">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item-group>
                            <v-list-item href="/#/Dashboard">
                                <v-list-item-title>{{$store.getters.user.name}}</v-list-item-title>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-title @click="logout">Déconnexion</v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BarButtons",

        data() {
            return {
                buttonsBar: [
                    {
                        title: 'Contactez-nous pour devenir client'
                    },
                    {
                        title: 'Connexion',
                        click: '/#/Login'
                    }
                ]
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
                this.$router.push('/')
            }
        }
    }
</script>