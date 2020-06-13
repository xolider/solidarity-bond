<template>
    <ProductEdit @close="close" @save="save" :product-model="product"/>
</template>

<script>
    import ProductEdit from "./ProductEdit";
    export default {
        name: "ProductAdd",
        components: {ProductEdit},
        data() {
            return {
                product: {}
            }
        },
        methods: {
            reset() {
                this.product = {
                    name: '',
                    price: 0,
                    quantity: 0,
                    description: '',
                    image: ''
                }
            },
            close() {
                this.reset()
                this.$emit('close')
            },
            save() {
                this.$emit('add', this.product)
                this.close()
            }
        },
        mounted() {
            this.reset()
        }
    }
</script>

<style scoped>

</style>