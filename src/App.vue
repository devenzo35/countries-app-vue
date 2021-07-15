<template>
  <Navbar />
  <Input />
  <CountryList />
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
};
</script>
