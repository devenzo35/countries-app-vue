<template>
  <Navbar />
  <Input />
  <input id="inputEl" v-model="search" type="text" name="search_country" class="bg-darkBlue text-white w-5/6 rounded h-14 m-auto mt-5" placeholder="Search for a country" />      
  <CountryList :search="search" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Input from "./components/Input.vue";
import CountryList from "./components/CountryList.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Input,
    CountryList,
  },


    data(){
        return {
            search: "",
        }   
    }
};
</script>
