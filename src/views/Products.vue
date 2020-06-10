<template>
    <div class="Products">
        <v-container>
            <v-row class="mt-10" justify="center">
                <v-col cols="12" md="3" v-for="(item, i) in products" :key="i">
                    <ProductCard :item="item" @update="updateProduct" @order="orderProduct"/>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="produtEditDialog" max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Modifier le produit</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="1" sm="2">
                                <v-text-field label="ID" required v-model="productEditDialogModels.id" disabled></v-text-field>
                            </v-col>
                            <v-col cols="12" md="7" sm="6">
                                <v-text-field label="Nom" required v-model="productEditDialogModels.name"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="1" sm="2">
                                <v-text-field label="Prix" required v-model="productEditDialogModels.price"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3" sm="2">
                                <v-text-field label="Quantité en stock" required v-model="productEditDialogModels.quantity"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Description" required v-model="productEditDialogModels.description"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="URL de l'image" required v-model="productEditDialogModels.image"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="primary" @click="saveProduct">
                        Sauvegarder
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="order.orderDialog" max-width="600">
            <v-window v-model="order.currentWindow" touchless>
                <v-window-item>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Vous allez commander: {{order.item.name}}</span>
                        </v-card-title>
                        <v-card-text>
                            <div>Vous allez commander: {{order.item.name}}. Appuyez sur "Suivant" afin de poursuivre la commande.</div>
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
                        <v-card-title>
                            <span class="headline">Vous allez commander: {{order.item.name}}</span>
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
                                        <td>{{order.item.id}}</td>
                                        <td>{{order.item.name}}</td>
                                        <td>{{order.item.description}}</td>
                                        <td>{{order.item.price}}€</td>
                                        <td><v-text-field type="number" v-model="order.quantity" @change.passive="computeOrderTotal"></v-text-field></td>
                                        <td>{{order.total}}€</td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click="prevSlide" outlined>
                                Précédent
                            </v-btn>
                            <v-btn color="primary" @click="nextSlide" disabled>
                                Suivant
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-window-item>
            </v-window>
        </v-dialog>
    </div>
</template>

<script>
    import ProductCard from "../components/ProductCard";
    import productsApi from '../api/products'
    export default {
        name: "Products",
        components: {ProductCard},
        data() {
            return {
                products: [],
                produtEditDialog: false,
                productEditDialogModels: {},
                order: {
                    item: {},
                    orderDialog: false,
                    currentWindow: 0,
                    quantity: 0,
                    total: 0
                }
            }
        },
        methods: {
            getProducts() {
                productsApi.getProducts().then(resp => this.products = resp)
            },
            updateProduct(item) {
                this.productEditDialogModels = item
                this.produtEditDialog = true
            },
            saveProduct() {
                let item = this.productEditDialogModels
                this.productEditDialogModels = {}
                this.produtEditDialog = false
                productsApi.updateProduct(item).then(resp => {
                    console.log(resp)
                    this.getProducts()
                })
            },
            orderProduct(item) {
                this.order.item = item
                this.order.currentWindow = 0
                this.order.orderDialog = true
            },
            prevSlide() {
                this.order.currentWindow -= 1
            },
            nextSlide() {
                this.order.currentWindow += 1
            },
            computeOrderTotal() {
                this.order.total = this.order.item.price * this.order.quantity
            }
        },
        mounted() {
            this.getProducts()
        }
    }
</script>

<style scoped>

</style>