<template>
    <div class="Products">
        <v-container>
            <v-row class="mt-10" justify="center">
                <v-col cols="12" md="3" v-for="(item, i) in products" :key="i">
                    <ProductCard :item="item" @update="updateProduct" @order="orderProduct"/>
                </v-col>
                <v-col v-if="$store.getters.isLogged && $store.getters.user.id_usertype === 1" cols="12" md="3">
                    <v-card height="356px" class="text-center">
                        <v-btn depressed color="primary" class="card-add-btn">
                            <div>
                                <v-icon>mdi-plus</v-icon>
                                <p class="mt-4">Ajouter un produit</p>
                            </div>
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="produtEditDialog" max-width="600px">
            <ProductEdit :product-model="productEditDialogModels" @save="saveProduct" @close="produtEditDialog = false"/>
        </v-dialog>
        <v-dialog v-model="order.orderDialog" max-width="600px" persistent>
            <ProductOrder :item="order.item" @close="order.orderDialog = false"/>
        </v-dialog>
    </div>
</template>

<script>
    import ProductCard from "../components/ProductCard";
    import productsApi from '../api/products'
    import ProductEdit from "../components/dialogs/ProductEdit";
    import ProductOrder from "../components/dialogs/ProductOrder";
    export default {
        name: "Products",
        components: {ProductOrder, ProductEdit, ProductCard},
        data() {
            return {
                products: [],
                produtEditDialog: false,
                productEditDialogModels: {},
                order: {
                    item: {},
                    orderDialog: false
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
                this.order.orderDialog = true
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