<template lang="">
    <div class="mt-10 flex flex-col gap-16 md:flex-row md:flex-wrap">
        <section to="/country" class="bg-darkBlue shadow-lg w-4/6 m-auto rounded-sm list-none mb-10 md:w-2/12" v-bind:key="country.alpha2Code" v-for="country in filteredCountries">
        <router-link :to="{ name: 'country', params: { countryName: country.name } }" >
            <CountryInfo  :country="country" />
        </router-link >
        </section>
    </div>
</template>
<script>

import CountryInfo from '../views/CountryInfo.vue';

export default {
    name: "CountryList",
    props: {
        search: {
            type: String,
        },
        region: {
            type: String,
        },
    },
    components: {
        CountryInfo
    },
    data(){
        return {
            countries: [],
            filteredCountries: [],
        }
    },
    methods: {
        
        filterCountries(){
            console.log('initialized')
            let regex = new RegExp(this.search, "gi")
            this.filteredCountries = this.countries.filter(country => 
                country.name.match(regex));
        }
    },
    mounted(){
      
                fetch('https://restcountries.eu/rest/v2/all').then(res=> res.json()).then(data=>{
                    this.countries = data
                this.filterCountries()})
    
    },
    watch: {
        search: function(){
            this.filterCountries()
        },
        region: function(){
            fetch('https://restcountries.eu/rest/v2/region/'+ this.region).then(res=> res.json()).then(data=>{
                    this.countries = data
                this.filterCountries()})
        }

    }
}
</script>


