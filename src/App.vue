<template>
  <Navbar />
  <input id="inputEl" v-model="search" type="text" name="search_country" class="bg-darkBlue text-white w-5/6 rounded h-14 p-5 block m-auto mt-5 mb-4" placeholder="Search for a country" /><br/>      
  <nav class="w-3/6 ml-3" for="region">
    <ul>
      <li class="bg-darkBlue shadow-md p-4 rounded-lg text-md" v-on:click="toggleDropdown">Filter by region</li>
    </ul>
    <ul class="bg-darkBlue shadow-md rounded-lg p-3 mt-2" v-if="isDropdownOpen">
    <li v-on:click="getText">Europe</li>
    <li v-on:click="getText">Africa</li>
    <li v-on:click="getText">Americas</li>
    <li v-on:click="getText">Asia</li>
    <li v-on:click="getText">Oceania</li>
    </ul>
    </nav>
  <CountryList :search="search" :region="region" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import CountryList from "./components/CountryList.vue";

export default {
  name: "App",
  components: {
    Navbar,
    CountryList,
  },
  data(){
        return {
            search: "",
            isDropdownOpen: false,
            region: ""
        }   
    },

    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        getText(el) {
          return this.region = el.target.innerText  
        }
    }


};
</script>
