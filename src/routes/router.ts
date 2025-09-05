import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: () => import("../Pages/HomePage.vue")
        },
        {
            path: "/adventureHome",
            name: "AdventureHome",
            component: () => import("../Pages/Hurghada_Adventures/AdventureHomePage.vue")
        },
        {
            path: "/dolphinPage",
            name: "DolphinPage",
            component: () => import("../Pages/Hurghada_Adventures/DolphinPage.vue")
        },
        {
            path: "/superSafariPage",
            name: "SuperSafariPage",
            component: () => import("../Pages/Hurghada_Adventures/SuperSafari.vue")
        },
        {
            path: "/privateTourPage",
            name: "PrivateTourPage",
            component: () => import("../Pages/Hurghada_Adventures/PrivateTourPage.vue")
        },
        {
            path: "/redSeaDivingPage",
            name: "RedSeaDivingPage",
            component: () => import("../Pages/Hurghada_Adventures/RedSeaDivingPage.vue")
        },
        {
            path: "/orangeBayPage",
            name: "OrangeBayPage",
            component: () => import("../Pages/Hurghada_Adventures/OrangeBay.vue")
        },
        {
            path: "/paradisePage",
            name: "ParadisePage",
            component: () => import("../Pages/Hurghada_Adventures/ParadisePage.vue")
        },
        {
            path: "/hawksApartments",
            name: "HawksApartments",
            component: () => import("../Pages/Hawks_Apartment/HawksApartments.vue")
        },
        {
            path: "/aldauHeights",
            name: "AldauHeights",
            component: () => import("../Pages/Hawks_Apartment/Aldau_Heights.vue")
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'NotFound', 
            component: () => import('../Pages/NotFoundPage.vue')  
        },
    ]
});


export default router;