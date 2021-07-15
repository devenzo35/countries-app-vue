<template lang="">
    <div class="mt-10">
        <li class="shadow-lg w-4/6 m-auto rounded-sm list-none mb-10" v-bind:key="country.alpha2Code" v-for="country in countries">
            <img class="rounded-t-md" :src="country.flag" />
            <section class="w-10/12 flex flex-col gap-2 m-auto">
            <span class="font-bold text-xl">{{country.name}}</span>
            <p>Population: {{country.population}}</p>
            <p>Region: {{country.region}}</p>
            <p>Capital: {{country.capital}}</p>
            </section>
        </li>
    </div>
</template>
<script>

console.log('object')
export default {
    name: "CountryList",
    data(){
        return {
            countries: []
        }
    },
    mounted(){
        
        fetch('https://restcountries.eu/rest/v2/all').then(res=> res.json()).then(json=> this.countries = json)
    }


}
</script>