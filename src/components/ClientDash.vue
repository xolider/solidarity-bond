<template>
    <div class="ClientDash">
        <v-container>
            <v-row justify="center" class="mt-10">
                <v-col cols="12" md="8" sm="12">
                    <v-card class="elevation-10 dashboard_card">
                        <v-card-title>
                            <v-subheader class="headline">Vos commandes en cours</v-subheader>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-center py-12">
                            Vous n'avez pas de commandes en cours
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" class="mt-10">
                <v-col cols="12" md="8" sm="12">
                    <v-card class="elevation-10 dashboard_card">
                        <v-card-title>
                            <v-subheader class="headline">Vos commandes passées</v-subheader>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-center py-12">
                            Vous n'avez pas encore passé de commande
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-btn fab absolute bottom right dark color="primary" class="mb-10">
            <v-icon>mdi-cart</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "ClientDash"
    }
</script>

<style scoped>
    .dashboard_card
    {
        border: 1px solid #1976d2;
    }
</style>