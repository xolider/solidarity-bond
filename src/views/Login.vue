<template>
    <div class="ClientLogin">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="4" sm="12">
                    <v-card class="elevation-18">
                        <v-card-title><span class="headline">Connexion {{side}}</span></v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-form @submit.prevent="submit" id="checkLogin">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="Identifiant" v-model="identifier" :rules="[!!identifier || 'L\'identifiant est requis.']" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field type="password" label="Mot de passe" v-model="password" :rules="[!!password|| 'Le mot de passe est requis']" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn type="submit" color="success" form="checkLogin" :disabled="identifier === '' || password === ''">Connexion</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "ClientLogin",
        data() {
            return {
                identifier: '',
                password: ''
            }
        },
        methods: {
            submit() {
                if(this.$store.dispatch('login', this.identifier)) {
                    this.$router.push('/Dashboard')
                }
            }
        },
        props: ['side']
    }
</script>