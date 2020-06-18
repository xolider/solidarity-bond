<template>
    <v-window v-model="currentWindow" touchless>
        <v-window-item>
            <v-card>
                <v-btn icon class="float-right" @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-card-title>
                    <span class="headline">Vous allez commander: {{item.name}}</span>
                </v-card-title>
                <v-card-text>
                    <div>Vous allez commander: {{item.name}}. Appuyez sur "Suivant" afin de poursuivre la commande.</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="nextSlide">
                        Suivant
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-window-item>
        <v-window-item>
            <v-card>
                <v-btn icon class="float-right" @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-card-title>
                    <span class="headline">Vous allez commander: {{item.name}} &bull; Quantité</span>
                </v-card-title>
                <v-card-text>
                    <v-simple-table>
                        <thead>
                        <tr>
                            <th class="text-left">ID</th>
                            <th class="text-left">Nom</th>
                            <th class="text-left">Description</th>
                            <th class="text-left">Prix</th>
                            <th class="text-left">Quantité</th>
                            <th class="text-left">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.description}}</td>
                            <td>{{item.price}}€</td>
                            <td><v-text-field type="number" v-model="quantity" @change.passive="computeOrderTotal"></v-text-field></td>
                            <td>{{total}}€</td>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="prevSlide" outlined>
                        Précédent
                    </v-btn>
                    <v-btn color="primary" @click="nextSlide" :disabled="parseInt(total) <= 0">
                        Suivant
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-window-item>
        <v-window-item>
            <v-card>
                <v-btn class="float-right" icon @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-card-title>
                    <span class="headline">Vous allez commander: {{item.name}} &bull; Livraison</span>
                </v-card-title>
                <v-card-text>
                    <v-radio-group v-model="deliveryMode">
                        <v-radio label="Remise en main propres" :value="1"></v-radio>
                        <v-radio label="Retrait au campus d'Arras" :value="2"></v-radio>
                    </v-radio-group>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined color="primary" @click="prevSlide">
                        Précédent
                    </v-btn>
                    <v-btn color="primary" @click="nextSlide">
                        Suivant
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-window-item>
        <v-window-item>
            <v-card>
                <v-btn class="float-right" icon @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-card-title>
                    <span class="headline">Vous allez commander: {{item.name}} &bull; Paiement</span>
                </v-card-title>
                <v-card-text>

                </v-card-text>
                <v-card-actions>
                    <v-btn outlined color="primary" @click="prevSlide">
                        Précédent
                    </v-btn>
                    <v-btn color="primary" disabled>
                        Suivant
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-window-item>
    </v-window>
</template>

<script>
    export default {
        name: "ProductOrder",
        props: ['item'],
        data() {
            return {
                currentWindow: 0,
                total: 0,
                quantity: 0,
                deliveryMode: 1
            }
        },
        methods: {
            computeOrderTotal() {
                this.total = this.item.price * this.quantity
            },
            prevSlide() {
                this.currentWindow -= 1
            },
            nextSlide() {
                this.currentWindow += 1
            },
            close() {
                this.currentWindow = 0
                this.$emit('close')
            }
        },
        mounted() {
            this.currentWindow = 0
        }
    }
</script>

<style scoped>

</style>