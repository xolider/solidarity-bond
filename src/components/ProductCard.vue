<template>
    <div class="ProductCard">
        <v-card class="mx-auto" height="356px">
            <v-img class="white--text align-end" max-height="200px" :src="item.image">
                <v-card-title>{{item.name}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{item.description}}</v-card-subtitle>
            <v-card-text class="text--primary">
                <div>Prix: {{item.price}}€ l'unité</div>
                <div>En stock: {{item.quantity}}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn v-if="$store.getters.isLogged && $store.getters.user.id_usertype === 2" color="primary"
                @click="$emit('order', item)">
                    Acheter
                </v-btn>
                <v-btn v-else-if="$store.getters.isLogged && $store.getters.user.id_usertype === 1" color="primary" outlined
                @click="$emit('update', item)">
                    Modifier le produit
                </v-btn>
                <div v-else>
                    <p class="grey--text pb-0 mb-0 unlogged-text">Connectez-vous ou contactez-nous pour commander ce produit</p>
                </div>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "ProductCard",
        props: ['item']
    }
</script>

<style scoped>
    .unlogged-text
    {
        font-size: 14px;
    }
</style>