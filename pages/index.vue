<template>
  <div>
    <div>
      {{ this.$store.state.count }}
      {{ count }}
    </div>
    <button @click="increaseCnt()">증가하기</button>
  </div>
</template>

<script>
import value from "@/mixin/value.js";

export default {
  mixins: [value],
  components: {},
  computed: {
    count() {
      return this.$store.getters.getIncreaseCount; //3
    },
  },
  methods: {
    increaseCnt() {
      this.$store.commit("addCounter", 10);
    },
  },
  mounted() {
    this.$store.dispatch("getCounter");
  },
};
</script>

<style lang="scss" scoped></style>
