
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // <---
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


const app = createApp(App);

app.config.globalProperties.api = new WooCommerceRestApi({
    url: "http://quoviz-headless-test.test",
    consumerKey: "ck_aa21551abb13600a3feabe1dec4592d63290e414",
    consumerSecret: "cs_aa20dc6619b8f74aafbf22ade37be014b61de1d9",
    version: "wc/v3",
    axiosConfig: {
        headers: {}
      }
  });

app.use(router).mount('#app');