<template>
    <div class="Products">
        <v-container>
            <v-row class="mt-10" justify="center">
                <v-col cols="12" md="3" v-for="(item, i) in product.products" :key="i">
                    <ProductCard :item="item" @update="updateProduct" @order="orderProduct"/>
                </v-col>
                <v-col v-if="$store.getters.isLogged && $store.getters.user.id_usertype === 1" cols="12" md="3">
                    <v-card height="356px" class="text-center">
                        <v-btn depressed color="primary" class="card-add-btn" @click="product.addDialog = true">
                            <div>
                                <v-icon>mdi-plus</v-icon>
                                <p class="mt-4">Ajouter un produit</p>
                            </div>
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="product.editDialog" max-width="600px">
            <ProductEdit :product-model="product.editDialogModels" @save="saveProduct" @close="product.editDialog = false"/>
        </v-dialog>
        <v-dialog v-model="order.orderDialog" max-width="600px" persistent>
            <ProductOrder :item="order.item" @close="order.orderDialog = false"/>
        </v-dialog>
        <v-dialog v-model="product.addDialog" max-width="600px">
            <ProductAdd @close="product.addDialog = false" @add="addProduct"/>
        </v-dialog>
    </div>
</template>

<script>
    import ProductCard from "../components/ProductCard";
    import productsApi from '../api/products'
    import ProductEdit from "../components/dialogs/ProductEdit";
    import ProductOrder from "../components/dialogs/ProductOrder";
    import ProductAdd from "../components/dialogs/ProductAdd";
    export default {
        name: "Products",
        components: {ProductAdd, ProductOrder, ProductEdit, ProductCard},
        data() {
            return {
                product: {
                    products: [],
                    editDialog: false,
                    editDialogModels: {},
                    addDialog: false
                },
                order: {
                    item: {},
                    orderDialog: false
                }
            }
        },
        methods: {
            getProducts() {
                productsApi.getProducts().then(resp => this.product.products = resp)
            },
            updateProduct(item) {
                this.product.editDialogModels = item
                this.product.editDialog = true
            },
            saveProduct() {
                let item = this.product.editDialogModels
                this.product.editDialogModels = {}
                this.product.editDialog = false
                productsApi.updateProduct(item).then(resp => {
                    console.log(resp)
                    this.getProducts()
                })
            },
            orderProduct(item) {
                this.order.item = item
                this.order.orderDialog = true
            },
            addProduct(item) {
                productsApi.createProduct(item).then(resp => {
                    console.log(resp)
                    this.getProducts()
                })
            }
        },
        mounted() {
            this.getProducts()
        }
    }
</script>

<style scoped>
    .card-add-btn
    {
        width: 100%;
        height: 100% !important;
    }
</style>