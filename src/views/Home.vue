<template>
    <div class="Home">
        <v-parallax src="https://www.plm.automation.siemens.com/media/global/fr/laboratory-management-consumer-packaged-goods-cpr-1280x720_tcm55-5656.jpg"
        class="parallax_image">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="display-4 font-weight-thin">Solidarity Bond</h1>
                </v-col>
            </v-row>
        </v-parallax>
        <v-container>
            <v-row justify="center" class="text-center">
                <v-col cols="12" md="8" sm="12">
                    <h3 class="display-1 blue--text text--darken-3">Solidarity Bond fourni du matériel de protection
                        imprimé en 3D tel que des visières grâce à l'école d'ingénieurs CESI</h3>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center">
                <v-col cols="12" md="8" sm="12">
                    <p class="subtitle-2">L'école d'ingénieurs CESI, qui possède 25 campus en France, a choisi de mettre
                        à disposition ses ressources afin de participer au combat contre le COVID-19, notamment en permettant
                        aux entreprises, associations, personnel médical et autres de commander du matériel imprimé en 3D.</p>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center my-10">
                <v-col cols="12">
                    <v-btn text color="primary" href="/#/Products">
                        <v-icon class="mr-2">mdi-cart</v-icon> Découvrir nos produits
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center imgs">
                <v-col cols="12" md="6" sm="12">
                    <v-img src="https://dyw7ncnq1en5l.cloudfront.net/optim/produits/1187/22789/zortrax-m200_2fea19892cd52e76__450_400.jpg" alt="Imprimante 3D"/>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-img src="https://madeinmarseille.net/actualites-marseille/2020/04/visiere-protection-coronavirus.jpg" alt="Visières"/>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row justify="center" class="text-center">
                <v-col cols="12" md="8" sm="12">
                    <h3 class="display-1 blue--text text--darken-3">Nos clients et partenaires</h3>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="4" sm="12" class="text-md-right">
                    <v-list disabled>
                        <p class="grey--text">NOS CLIENTS</p>
                        <v-list-item-group>
                            <v-list-item v-for="(client, i) in clients" :key="i">
                                <v-list-item-title class="hidden-sm-and-down mr-5" v-text="client.title"></v-list-item-title>
                                <v-list-item-avatar><v-img :src="client.img" alt="Google image"/></v-list-item-avatar>
                                <v-list-item-title class="hidden-md-and-up ml-5" v-text="client.title"></v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col cols="12" md="4" sm="12" class="text-md-left">
                    <v-list >
                        <p class="grey--text">NOS PARTENAIRES</p>
                        <v-list-item-group>
                            <v-list-item disabled color="black" v-for="(partenaire, i) in partenaires" :key="i">
                                <v-list-item-avatar><v-img :src="partenaire.img" alt="Google image"/></v-list-item-avatar>
                                <v-list-item-title v-text="partenaire.title"></v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="partnerDialog = true">
                                <v-list-item-avatar>
                                    <v-icon>
                                        mdi-open-in-new
                                    </v-icon>
                                </v-list-item-avatar>
                                <v-list-item-title>
                                     Devenez partenaire
                                </v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row justify="center" class="text-center">
                <v-col cols="12" md="8" sm="12">
                    <h3 class="display-1 blue--text text--darken-3">Implantation des campus CESI</h3>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center">
                <v-col cols="12">
                    <p>Voici une carte des implantations des campus CESI</p>
                </v-col>
            </v-row>
            <v-row justify="center" class="text-center">
                <v-col cols="12" md="3" sm="12">
                    <v-img src="../assets/cesi.png" alt="implantation CESI"/>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="partnerDialog" max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">
                        Devenez partenaire
                    </span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="mt-2">
                    <h4>Vous-souhaitez devenir partenaire ?</h4>
                    <br>
                    <p>Il faut renseigner :</p>
                    <ul>
                        <li>Coordonnées et informations relatives au contact</li>
                        <li>Coordonnées et informations relatives à l'entreprise/association/...</li>
                        <li>Type de partenariat (Soutien financier, matériel, livraison...)</li>
                    </ul>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="primary" href="mailto:clement.vicart@viacesi.fr">
                        Envoyez un mail
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                clients: [
                    {
                        title: 'Corbie informatique',
                        img: require('../assets/Info.jpg')
                    },
                    {
                        title: 'Café de la place',
                        img: require('../assets/cafe.jpg')
                    },
                    {
                        title: 'Cabinet d\'ortophonie',
                        img: require('../assets/Medic.jpg')
                    },
                    {
                        title: 'Deheul chaussures',
                        img: require('../assets/chaussures.png')
                    },
                    {
                        title: 'Alloproelec',
                        img: require('../assets/Elec.jpg')
                    }
                ],
                partenaires: [
                    {
                        title: 'Corbie informatique',
                        img: require('../assets/Info.jpg')
                    }
                ],
                partnerDialog: false
            }
        }
    }
</script>

<style>
    .parallax_image img
    {
        filter: blur(4px);
    }
</style>