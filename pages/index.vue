<template>
  <div>
    <input type="text" v-model="inputValue" />
    <ClassItem v-for="item in classList" :key="item.i" :item="item"></ClassItem>
  </div>
</template>

<script>
import ClassItem from "@/components/ClassItem";
import value from "@/mixin/value.js";

export default {
  mixin: [value],
  components: {
    ClassItem,
  },
  data() {
    return {
      inputValue: null,
      classList: [
        {
          name: "kiki",
          message: "hello world",
          user: {
            id: 20,
            type: 1,
            price: 2000,
          },
          published_lecture: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        },
        {
          name: "어쩌구",
          message: "hello!!",
        },
      ],
    };
  },
  watch: {
    inputValue(value) {
      console.log(value);
    },
  },
  methods: {},
  mounted() {
    this.formattedDate();
  },
};
</script>

<style lang="scss" scoped></style>
