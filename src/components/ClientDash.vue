<template>
    <div class="ClientDash">
        <v-container>
            <OrderCard title="Vos commandes en cours" orange="true" :headers="orders.headers" :items="orders.itemsBuilding"/>
            <OrderCard title="Vos commandes passées" green="true" :headers="orders.headers.slice(0, 5)" :items="orders.itemsFinished"/>
            <v-row class="mt-10">
                <v-col cols="12">
                    <v-btn color="primary" rounded href="/#/Products">
                        <v-icon class="mr-2">mdi-cart</v-icon> Commander un produit
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import OrderCard from "./OrderCard";
    import ordersApi from '../api/orders'
    export default {
        name: "ClientDash",
        components: {OrderCard},
        data() {
            return {
                orders: {
                    headers: [{
                        text: 'ID',
                        align: 'start',
                        value: 'id'
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
                        text: 'Status',
                        value: 'status',
                        align: 'end'
                    }],
                    itemsBuilding: [],
                    itemsFinished: []
                }
            }
        },
        methods: {
            getOrders() {
                ordersApi.getOrder().then(resp => resp.forEach(elem => {
                    let item = {
                        id: elem.id,
                        product: elem.Product.name,
                        quantity: elem.quantity,
                        date: elem.date.slice(0, 10),
                        total: elem.total,
                        status: elem.OrderStatus.name
                    }
                    if(elem.id_orderstatus !== 4) {
                        this.orders.itemsBuilding.push(item)
                    }
                    else {
                        this.orders.itemsFinished.push(item)
                    }
                }))
            }
        },
        mounted() {
            this.getOrders()
        }
    }
</script>

<style scoped>
    .dashboard_card
    {
        border: 1px solid #1976d2;
    }
</style>