<template lang="en">
    <nav @click="passEvent" class="bg-white dark dark:bg-darkBlue dark:text-white text-xs flex items-center justify-between font-bold p-2 px-4 h-20 w-full shadow-md lg:px-16 lg:text-lg">
        Where in the world?
        <button v-if="isDark" ><i class="far fa-moon"></i> Light mode</button>
        <button v-else="isDark" ><i class="fas fa-moon"></i> Dark mode</button>
    </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isDark: JSON.parse(localStorage.getItem("theme")),
    };
  },
  methods: {
    passEvent() {
      this.isDark = !this.isDark;
      localStorage.setItem("theme", this.isDark);
      this.$emit("changeTheme", this.isDark);
    },
  },
};
</script>
<style lang=""></style>
