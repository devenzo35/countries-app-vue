<template>
  <div class="w-10/12 m-auto py-6 dark:text-white">
    <router-link to="/">
      <button
        class="bg-white dark dark:bg-darkBlue dark:text-white p-1 w-28 shadow-2xl mb-10"
      >
        <i class="fas fa-arrow-left mr-6"></i> Back
      </button>
    </router-link>

    <section>
      <img class=" m-auto rounded-t-md" :src="info.flag" />
      <section class="flex flex-col gap-2 my-10">
        <p class="font-bold text-xl mb-2">{{ info.name }}</p>
        <p><b>Native name:</b> {{ info.nativeName }}</p>
        <p><b>Population</b>: {{ info.population }}</p>
        <p><b>Region</b>: {{ info.region }}</p>
        <p><b>Sub region: </b> {{ info.subregion }}</p>
        <p><b>Capital</b>: {{ info.capital }}</p>
      </section>
      <section class="flex flex-col gap-2 mb-4">
        <p>
          <b>Top level domain: </b>
          <span v-for="domains in info.topLevelDomain" v-bind:key="domains">{{
            domains
          }}</span>
        </p>
        <p>
          <b>Currencies: </b>
          <span v-for="currencie in info.currencies" v-bind:key="currencie">
            {{ currencie.name }}</span
          >
        </p>
        <p>
          <b>Languages</b>:
          <span v-for="language in info.languages" v-bind:key="language">
            {{ language.name }} {{ " " }}</span
          >
        </p>
      </section>
      <section class=" flex flex-col gap-2 mb-4">
        <p class="font-bold text-xl mb-2"><b>Border countries</b></p>
        <ul class="flex flex-row flex-wrap gap-2">
          <li
            class="bg-white dark dark:bg-darkBlue dark:text-white text-xs py-0.5 px-7 shadow-2xl"
            v-for="border in info.borders"
            v-bind:key="border"
          >
            {{ border || "This country doesn't have borders" }}
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "CountryInfo",
  data() {
    return {
      name: this.$route.params.countryName,
      info: [],
    };
  },

  mounted() {
    fetch(`https://restcountries.eu/rest/v2/name/${this.name}`)
      .then((resp) => resp.json())
      .then((data) => (this.info = data[0]));
  },
};
</script>
