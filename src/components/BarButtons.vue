<template>
    <div class="BarButtons">
        <div class="hidden-md-and-up">
            <v-menu>
                <template v-slot:activator="{on}">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item-group>
                        <v-list-item v-for="(button, i) in buttonsBar" :key="i" @click="button.click">
                            <v-list-item-title v-text="button.title"></v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </div>
        <div class="hidden-sm-and-down">
            <v-btn href="#" text class="mr-2">
                Contactez-nous pour devenir client
            </v-btn>
            <v-btn outlined class="mr-2" href="#">
                Connexion client
            </v-btn>
            <v-btn outlined href="#">
                Connexion CESI
            </v-btn>
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
                        title: 'Contactez-nous pour devenir client',
                        click: ''
                    },
                    {
                        title: 'Connexion client',
                        click: ''
                    },
                    {
                        title: 'Connexion CESI',
                        click: ''
                    }
                ]
            }
        }
    }
</script>