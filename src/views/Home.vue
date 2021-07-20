<template>
  <div
    class="flex flex-col w-full items-center justify-between px-4 lg:px-16 lg:mt-9 lg:flex-row"
  >
    <input
      id="inputEl"
      v-model="search"
      type="text"
      name="search_country"
      class="bg-white dark dark:bg-darkBlue dark:text-white w-full lg:w-2/6 rounded h-14 p-5 block  mt-5 mb-4 shadow-md"
      placeholder="Search for a country"
    /><br />
    <nav class="w-3/6 lg:w-1/6 self-start lg:self-center" for="region">
      <ul>
        <li
          class="bg-white dark dark:bg-darkBlue h-14 dark:text-white shadow-md p-4 rounded-lg text-md flex justify-around items-center"
          v-on:click="toggleDropdown"
        >
          Filter by region <i class="fas fa-chevron-down text-sm mt-1"></i>
        </li>
      </ul>
      <ul
        class="bg-white w-4/6 dark dark:bg-darkBlue dark:text-white absolute shadow-md rounded-lg p-3 mt-2"
        v-if="isDropdownOpen"
      >
        <li v-on:click="getText">Europe</li>
        <li v-on:click="getText">Africa</li>
        <li v-on:click="getText">Americas</li>
        <li v-on:click="getText">Asia</li>
        <li v-on:click="getText">Oceania</li>
      </ul>
    </nav>
  </div>
  <CountryList :search="search" :region="region" />
</template>

<script>
import CountryList from "../components/CountryList.vue";
export default {
  name: "Home",
  components: {
    CountryList,
  },
  data() {
    return {
      search: "",
      isDropdownOpen: false,
      region: "",
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    getText(el) {
      return (this.region = el.target.innerText);
    },
  },
};
</script>
