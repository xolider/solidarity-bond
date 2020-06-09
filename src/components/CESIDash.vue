<template>
    <div class="CESIDash">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8" sm="12">
                    <v-card class="elevation-10 dashboard_card">
                        <v-card-title>
                            <v-subheader class="headline">Liste des commandes</v-subheader>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-data-table
                            :headers="headers"
                            :items="items">
                                <template v-slot:item.actions="{item}">
                                    <v-btn color="primary" @click="item">
                                        Commencer la production
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "CESIDash",
        data() {
            return {
                headers: [{
                    text: 'ID',
                    align: 'start',
                    value: 'id'
                }, {
                    text: 'Client',
                    value: 'name'
                }, {
                    text: 'Produit',
                    value: 'product'
                }, {
                    text: 'Quantité',
                    value: 'quantity'
                }, {
                    text: 'Date',
                    value: 'date'
                }, {
                    text: 'Prix total (€)',
                    value: 'total'
                }, {
                    text: 'Actions',
                    value: 'actions',
                    align: 'end',
                    sortable: false
                }],
                items: [
                    {
                        id: 1,
                        name: 'Hopital Arras',
                        product: 'Visière',
                        quantity: 2,
                        date: '09/06/2020',
                        total: 40
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .dashboard_card
    {
        border: 1px solid #1976d2;
    }
</style>