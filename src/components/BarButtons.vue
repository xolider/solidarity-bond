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
            <v-btn text @click="buttonsBar[0].click">{{this.buttonsBar[0].title}}</v-btn>
            <v-btn v-for="(button, i) in buttonsBar.slice(1)" :key="i" outlined @click="button.click" class="ml-2">
                {{button.title}}
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
                        click: () => {this.$router.push('/ClientLogin')}
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