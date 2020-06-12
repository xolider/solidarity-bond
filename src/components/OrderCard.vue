<template>
    <div class="OrderCard">
        <v-row justify="center" class="mt-10">
            <v-col cols="12" md="8" sm="12">
                <v-card class="elevation-10 dashboard_card">
                    <v-card-title>
                        <v-subheader :class="orange ? 'headline orange--text' : green ? 'headline green--text' : red ? 'headline red--text' :
                        'headline'">{{title}}</v-subheader>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-data-table
                                :headers="headers"
                                :items="items">
                            <template v-if="action" v-slot:item.actions="{item}">
                                <v-btn light color="primary" @click="$emit('startProduction', item)">
                                    Commencer la productionlocal
                                </v-btn>
                            </template>
                            <template v-slot:no-data>
                                <p class="my-auto">Aucune donnée disponnible</p>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "OrderCard",
        props: ['headers', 'items', 'action', 'title', 'green', 'orange', 'red']
    }
</script>

<style scoped>
    .dashboard_card
    {
        border: 1px solid #1976d2;
    }
</style>