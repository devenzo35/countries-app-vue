<template>

        
<h1>{{$route.params.countryName}}</h1>
 
</template>

<script>


export default {
 name: 'CountryInfo',
 data() {
    return {
      name: this.$route.params.countryName
    } 

  },
 mounted() {
   fetch(`https://restcountries.eu/rest/v2/name/${this.name}`).then(resp => resp.json()).then(data => console.log(data))
 } 
}
</script>
