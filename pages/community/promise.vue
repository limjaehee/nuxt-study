<template>
  <div style="padding: 20px">
    <h2>Promise 연습하기</h2>
  </div>
</template>

<script>
import api from "@/mixin/api";

export default {
  mixins: [api],
  data() {
    return {};
  },
  methods: {
    //간단한 예제
    promise() {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("✅"), reject(new Error());
        }, 1000);
      });

      promise
        .then((response) => console.log(response))
        .catch((response) => {
          console.log("💡"); //중간 에러시 처리
        });
    },
    //promise + async
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async getApple() {
      await this.delay(2000);
      return "🍎";
    },
  },
  mounted() {
    this.promise();
    this.getApple().then(console.log);
  },
};
</script>

<style lang="scss" scoped></style>
