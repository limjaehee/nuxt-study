<template>
  <div id="app">
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "default",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped></style>
