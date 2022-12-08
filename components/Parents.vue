<template>
  <div class="parent" v-if="btn">
    <button @click="confirm">확인</button>
    <button @click="cancel">취소</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      reject: null,
      btn: false,
    };
  },
  components: {},
  methods: {
    sayHello() {
      this.btn = true;
      return new Promise((resolve, reject) => {
        this.result = resolve;
        this.reject = reject;
      });
    },
    confirm() {
      this.result(true);
      console.log(typeof this.result);
    },
    cancel() {
      this.btn = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.parent {
  border: 1px solid blue;
  padding: 40px;
}
</style>
