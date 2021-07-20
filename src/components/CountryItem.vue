<template>
  <img class="rounded-t-md w-full h-3/6" :src="country.flag" />
  <section class="w-10/12 flex flex-col gap-2 m-auto p-2 text-sm">
    <span class="font-bold text-lg mt-2">{{ country.name }}</span>
    <p>
      <span class="font-semibold">Population:</span> {{ country.population }}
    </p>
    <p><span class="font-semibold">Region:</span> {{ country.region }}</p>
    <p><span class="font-semibold">Capital:</span> {{ country.capital }}</p>
  </section>
</template>

<script>
export default {
  name: "CountryItem",
  props: {
    country: Object,
  },
};
</script>
