<template>
    <v-card>
        <v-card-title>
            <span class="headline">Modifier le produit</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" md="1" sm="2">
                        <v-text-field label="ID" required v-model="productModel.id" disabled></v-text-field>
                    </v-col>
                    <v-col cols="12" md="7" sm="6">
                        <v-text-field label="Nom" required v-model="productModel.name"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="1" sm="2">
                        <v-text-field label="Prix" required v-model="productModel.price"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="2">
                        <v-text-field label="Quantité en stock" required v-model="productModel.quantity"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Description" required v-model="productModel.description"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="URL de l'image" required v-model="productModel.image"></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="primary" @click="$emit('close')">
                Annuler
            </v-btn>
            <v-btn text color="primary" @click="$emit('save')">
                Sauvegarder
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ProductEdit",
        props: ['productModel']
    }
</script>

<style scoped>

</style>