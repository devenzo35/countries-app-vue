<template lang="">
  <div
    class="mt-10 flex flex-col md:flex-row md:flex-wrap lg:justify-between lg:px-16"
  >
    <section
      to="/country"
      class="bg-white dark dark:bg-darkBlue dark:text-white shadow-xl w-10/12 m-auto mb-10 lg:m-0 lg:mr-1 lg:mb-14 rounded-sm list-none pb-10 lg:w-1/5"
      v-bind:key="country.alpha2Code"
      v-for="country in filteredCountries"
    >
      <router-link
        :to="{ name: 'country', params: { countryName: country.name } }"
      >
        <CountryItem :country="country" />
      </router-link>
    </section>
  </div>
</template>
<script>
import CountryItem from "./CountryItem.vue";

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
    CountryItem,
  },
  data() {
    return {
      countries: [],
      filteredCountries: [],
    };
  },
  methods: {
    filterCountries() {
      console.log("initialized");
      let regex = new RegExp(this.search, "gi");
      this.filteredCountries = this.countries.filter((country) =>
        country.name.match(regex)
      );
    },
  },
  mounted() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.countries = data;
        this.filterCountries();
      });
  },
  watch: {
    search: function() {
      this.filterCountries();
    },
    region: function() {
      fetch("https://restcountries.eu/rest/v2/region/" + this.region)
        .then((res) => res.json())
        .then((data) => {
          this.countries = data;
          this.filterCountries();
        });
    },
  },
};
</script>
