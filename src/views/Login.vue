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
                                            <v-text-field label="Adresse mail" v-model="mail" :rules="[!!mail || 'L\'adresse mail est requise.']" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field type="password" label="Mot de passe" v-model="password" :rules="[!!password || 'Le mot de passe est requis']" required></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-container>
                        </v-card-text>
                        <p class="ml-3 red--text">{{error}}</p>
                        <v-card-actions>
                            <v-btn type="submit" color="success" form="checkLogin" :disabled="mail === '' || password === ''">Connexion</v-btn>
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
                mail: '',
                password: '',
                error: ''
            }
        },
        methods: {
            submit() {
                this.$store.dispatch('login', {mail: this.mail, password: this.password})
                .then(resp => {
                    if(resp.Error) {
                        this.error = 'Adresse email ou mot de passe incorrect'
                    }
                    else {
                        this.$router.push('/Dashboard')
                    }
                })
            }
        },
        props: ['side']
    }
</script>