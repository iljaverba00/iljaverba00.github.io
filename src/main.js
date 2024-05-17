import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Tree from "primevue/tree";
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import Card from "primevue/card"

import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeicons/primeicons.css';
import router from "@/router";



const app = createApp(App);

app.component("Button", Button);
app.component("SelectButton", SelectButton);
app.component("Tree", Tree);
app.component("TabPanel", TabPanel);
app.component("TabView", TabView);
app.component("Card", Card);

app.use(router)
app.use(PrimeVue);
app.mount('#app');
