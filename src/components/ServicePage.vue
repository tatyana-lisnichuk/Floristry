<template>
  <div class="wrapper service-page__main service-page" id="service-page">
    <Header class="service-page__header container"></Header>

    <div
      class="service-page__left"
      :style="{ backgroundImage: 'url(' + mainImg + ')' }"
    >
      <!-- этот вариант с картинками работает!!! -->
      <!-- <img class="service-page__img" :src="img"> -->
    </div>
    <div class="service-page__right">
      <main>
        <div class="service-page__text-part">
          <h2>{{ pageTitle }}</h2>
          <p class="service-page__text">{{ description }}</p>

          <div class="service-page__brown-btn brown-btn-wrapper" v-on:click="showModal">
            <a href="#" class="brown-btn">Заказать</a>
          </div>
          </div>
        
          <ModalWindow
          v-if="isModalVisible"
          @closeModal="closeModal"
          >
          </ModalWindow>

        <SlickSlider :sliderImgs="sliderImgs"></SlickSlider>
      </main>
    </div>
    <footer> Больше фотографий в профиле <a href="#"><i class="fab fa-instagram footer__insta"></i></a>
    </footer>
  </div>
</template>
<script>

import Header from "@/components/Header";
import SlickSlider from "./SlickSlider.vue";
import ModalWindow from "@/components/ModalWindow";
export default {
  name: "ServicePage",
  props: {
    mainImg: String,
    pageTitle: String,
    description: String,
    sliderImgs: Array,
  },

  components: {

    Header,
    SlickSlider,
    ModalWindow
  },
  data() {
    return {
      isModalVisible:false
    }
    
  },
  methods:{
    showModal(){
      this.isModalVisible = true;

    },
    closeModal(){
      this.isModalVisible = false;
    }

    },
  //этот вариант с картинками работает!!!
  // computed: {
  //   img() {
  //     return './assets/imgs/' + this.mainImg
  //   }
  // }
};
</script>
<style>
.service-page__main {
  position: relative;
  min-height: 1080px;
}

.service-page h2 {
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: 9%;
  max-width: 370px;
  text-align: left;
  font-weight: 400;
  margin-bottom: 40px;
}

.service-page main p {
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  margin-bottom: 30px;
}
.service-page__text-part {
  padding-bottom: 50px;

  position: relative;
}
.service-page__brown-btn {
  position: absolute;
  bottom: 0;
  left: 0;
}

.service-page main {
  position: relative;
  padding-top: 115px;
  margin: auto 0;
}

.service-page__right {
  margin-left: 16px;
  width: 50%;
  position: relative;
  padding-left: 40px;
  float: right;
}
.service-page__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.service-page__text {
  max-width: 565px;
}

.service-page__left {
  width: 50%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  object-fit: cover;
  top: 0;
}
.service-page__slider {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}
.service-page footer {
  position: absolute;
  right: 95px;
  bottom: 30px;
}
.footer__insta {
  font-size: 1rem;
  margin-left: 30px;
}
</style>
