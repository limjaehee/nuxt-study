<template>
  <main class="service">
    <cite>sdflksdf</cite>
    <Header></Header>
    <section class="picture">
      <div class="inner">
        <h2 class="service__title">사진 목록</h2>
        <ul class="picture__box">
          <li class="picture__box__item cat"></li>
          <li class="picture__box__item dog"></li>
          <li class="picture__box__item rabbit"></li>
        </ul>
      </div>
    </section>
    <section class="content">
      <div class="inner">
        <h2 class="service__title">컨텐츠 목록</h2>
        <ul class="content__box">
          <li class="content__box__item">
            <p>앱 출시 기념 이벤트</p>
          </li>
          <li class="content__box__item">
            <p>고객 센터 안내</p>
            <span>010-0000-0000<br />월~금 6am~9pm / 공휴일 휴무</span>
          </li>
          <li class="content__box__item">
            <p>지점 안내</p>
            <span
              >서울시 어쩌구 모시깽이 7길<br />삐까뻔쩍 빌딩 10층 치킨
              컴퍼니</span
            >
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/page/service.scss";
</style>
