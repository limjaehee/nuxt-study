<template>
  <div>
    <Parents class="custom-parents" ref="parent_ref"> </Parents>
    <button @click="parentShow()">Show</button>
    <button @click="movePage()">이동</button>
    <hr />

    <ul style="padding: 50px">
      <li v-for="item in formattedList" :key="item.i">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Parents from "@/components/Parents";
import Child from "@/components/Child";
export default {
  data() {
    return {
      value: "안녕",
      list: [1, 9, 3, 2, 6, 0],
    };
  },
  components: {
    Parents,
    Child,
  },
  computed: {
    formattedList() {
      return this.list.filter((item) => item !== 6);
    },
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
