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
          resolve(4), reject(new Error());
        }, 1000);
      });

      promise
        .then((response) => response + 3) //중간 처리
        .then((response) => console.log(response));
    },
    //promise + async
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async getApple() {
      await this.delay(2000);
      return "🍎";
    },
    async getBanana() {
      await this.delay(1000); //1. 딜레이 후
      return "🍌"; //2. 리턴 출력
    },
    async pickAllFruits() {
      //3. 모두 응답 후 출력
      const response = await Promise.all([this.getApple(), this.getBanana()]);
      return response.join(",");
    },
    pickOnlyOne() {
      //빠르게 응답받은 하나만 출력
      return Promise.race([this.getApple(), this.getBanana()]);
    },
  },
  mounted() {
    this.promise();
    this.getApple().then(console.log);
    this.pickAllFruits().then(console.log);
    this.pickOnlyOne().then(console.log);
  },
};
</script>

<style lang="scss" scoped></style>
