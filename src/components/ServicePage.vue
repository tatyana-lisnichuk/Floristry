<template>
  <div class="site-wrapper" id="service-page"
  :class="{ 'fixed' : isPageFixed}"
  >
  <div class="service-page__main service-page">
    <Header class="service-page__header wrap-container"></Header>
    <!-- <div
      class="service-page__left"
      :style="{ backgroundImage: 'url(' + mainImg + ')' }"> -->
      <!-- этот вариант с картинками работает!!! -->
       <div
      class="service-page__left">
      <img class="service-page__img" :src="img">
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

        <SlickSlider class="service-page__slider" :sliderImgs="sliderImgs"></SlickSlider>
      </main>
    </div>
    <footer> Больше фотографий в профиле <a href="#"><i class="fab fa-instagram footer__insta"></i></a>
    </footer>
    <Footer class="service-page__footer"></Footer>
    </div>
  </div>
</template>
<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlickSlider from "./SlickSlider.vue";
import ModalWindow from "@/components/ModalWindow";

import { store } from '@/store.js';
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
    Footer,
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
  computed: {
    img() {
      return './assets/imgs/' + this.mainImg
    },
    isPageFixed() {
        return store.isNavOpen
    }
  }
};
</script>
<style>
.service-page__main {
  position: relative;
  min-height: 1080px;
  background-color: #3b181e;
}
.service-page h2 {
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: 9%;
  max-width: 370px;
  text-align: left;
  font-weight: 400;
  margin-bottom: 20px;
}
.service-page main p {
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  margin-bottom: 30px;
}
.service-page__text-part {
  padding-bottom: 30px;
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
  max-width: 575px;
  padding-right: 1rem;
}
.service-page__left {
  width: 50%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  object-fit: cover;
  top: 0;
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
.service-page__footer{
  display:none;
}
@media screen and (max-width:1150px){
  .service-page__text {
    max-width: 565px;
    padding-right: 1rem;
  }
}

@media screen and (max-width: 900px){
    .service-page__main {
    position: static;
  }
  .service-page h2 {
    font-size: 40px;
    max-width: 100%;
  }
  .service-page main p {
    font-size: 20px;
    line-height: 24px;
  }
  .service-page__text-part {
    position: static;
    margin-top: 150px;
    margin-bottom: 50px;
    padding-left:30px;
  }
  .service-page__brown-btn {
    position: static;
    float:left;
  }
  .service-page main {
    position: static;
     max-width: 700px;
     margin:0 50px;
    padding-top: 115px;
  }
  .service-page__right {
    margin-left: 0px;
    padding:0;
    width: 100%;
    position: relative;
    float: none;
  }
  .service-page__text {
    max-width: 565px;
  }
  .service-page__left {
    width: 100%;
    position: static;
  }
  .service-page footer {
   display: none;
  }
  .service-page__footer{
    display:unset;
  }
  .footer__insta {
    font-size: 1rem;
    margin-left: 30px;
  }
  .service-page__slider{
    position: absolute;
    top:0px;
  }
}
@media screen and (max-width: 720px){
  .service-page main p {
    font-size: 20px;
    line-height: 24px;
  }
  .service-page__text-part {
    position: static;
    margin-top: 100px;
    margin-bottom: 40px;
  }
  
}
@media screen and (max-width: 600px){
  .service-page h2 {
    font-size: 32px;
  }
  
}
@media screen and (max-width: 540px){
.service-page__text-part {
    margin-top: 70px;
    margin-bottom: 40px;
  }
   .service-page h2 {
    margin-bottom:30px;
  }
}
@media screen and (max-width: 470px){
.service-page main p {
    font-size: 18px;
    line-height: 21px;
  }


  .service-page__text-part {
    margin-top: 0px;
    margin-bottom: 50px;
    padding-left:30px;
  }
  .service-page main {
     margin:0px;
    padding-top: 35px;
  }
   .service-page h2 {
    margin-bottom:30px;
  }
  .service-page__slider{
    position: unset;
    padding-left:30px;
    margin: 0 auto;
  }
}
</style>
