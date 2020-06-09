<template>
    <div class="CESIDash">
        <v-container>
            <OrderCard :headers="orders.headers" :items="orders.itemsPending" title="Commandes en attente" red="true" action="true"
            @startProduction="startBuilding"/>
            <OrderCard :headers="orders.headers.slice(0, 6)" :items="orders.itemsBuilding" title="Commandes en production" orange="true"/>
            <OrderCard :headers="orders.headers.slice(0, 6)" :items="orders.itemsFinished" title="Commandes terminées" green="true"/>
        </v-container>
    </div>
</template>

<script>
    import ordersApi from '../api/orders'
    import OrderCard from "./OrderCard";

    export default {
        name: "CESIDash",
        components: {OrderCard},
        data() {
            return {
                orders: {
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
                        sortable: false
                    }],
                    itemsPending: [],
                    itemsBuilding: [],
                    itemsFinished: []
                },
                currentOrders: {

                }
            }
        },
        methods: {
            getOrders() {
                ordersApi.getOrders().then(resp => resp.forEach(elem => {
                    let item = {
                        id: elem.id,
                        name: elem.Customer.name,
                        product: elem.Product.name,
                        quantity: elem.quantity,
                        date: elem.date.slice(0, 10),
                        total: elem.total
                    }
                    if(elem.id_orderstatus === 1) {
                        this.orders.itemsPending.push(item)
                    }
                    else if(elem.id_orderstatus === 4) {
                        this.orders.itemsFinished.push(item)
                    }
                }))
            },
            startBuilding(item) {
                console.log(item)
            }
        },
        mounted() {
            this.getOrders()
        }
    }
</script>

<style scoped>
</style>