import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import authLayout from "@/layouts/AuthLayout.vue";
import guestLayout from "@/layouts/GuestLayout.vue";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import AutoComplete from "primevue/autocomplete";
import SelectButton from "primevue/selectbutton";
import RadioButton from "primevue/radiobutton";

const app = createApp(App);

app.use(PrimeVue);
app.use(router).mount("#app");

app.component("default-layout", authLayout);
app.component("guest-layout", guestLayout);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Textarea", Textarea);
app.component("AutoComplete", AutoComplete);
app.component("SelectButton", SelectButton);
app.component("RadioButton", RadioButton);
