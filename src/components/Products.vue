<template>
    
    <div v-if="fetching == true">
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>
    <div v-else>
        <ul>
            <li v-for="prod in prod_data.data" :key="prod.id">
<div >
            <p>{{prod.id}}</p>
            <p>{{prod.name}}</p>
            <p>{{prod.price}}</p>
            <img :src="prod.images[0].src" alt="">
            <p>{{prod.images[0].src}}</p>
        </div>

            </li>
        </ul>
        
    </div>
</template>
<script>

import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
export default {
    name: "Products",
    components:{
        'PulseLoader': PulseLoader
    },

    data(){
        return{
            prod_data: null,
            fetching: false,
        }
    },

    created(){
            this.test();
    },
    methods:{
        test(){
                this.fetching = true;
this.api.get("products", {per_page: 20}).then(
    (response) => {
        console.log(response)
        this.fetching = false;
                this.prod_data = response
    })
    .catch((error) => {
         this.fetching = false;
         console.log(error)
    })

    }
    }

}
</script>