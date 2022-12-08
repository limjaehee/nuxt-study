<template>
  <div>
    <Parents class="custom-parents" ref="parent_ref"> </Parents>
    <button @click="parentShow()">Show</button>

    <button @click="movePage()">이동</button>
  </div>
</template>

<script>
import Parents from "@/components/Parents";
import Child from "@/components/Child";
export default {
  data() {
    return {
      value: "안녕",
    };
  },
  components: {
    Parents,
    Child,
  },
  mounted() {},
  methods: {
    async parentShow() {
      let ok = await this.$refs.parent_ref.sayHello();

      if (ok) {
        alert("성공!");
      }
    },
    movePage() {
      this.$router.push("/qna/create");
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-parents {
  margin: 40px;
  background: beige;
}
</style>
