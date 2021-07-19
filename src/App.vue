<template>
  <div :class="`${theme ? 'dark' : ''}`">
    <div class="bg-veryLight dark:bg-veryDark min-h-screen">
      <Navbar @changeTheme="changeT($event)" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  data() {
    return {
      theme: false,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    changeT(theme) {
      this.theme = theme;
    },
  },
};
</script>
