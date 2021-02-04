<template>
  <div class="all-works site-wrapper"
  :class="{ 'fixed' : isPageFixed}"
  >
    <div class="wrap-container">
      <Header></Header>
          <div class="all-works__slider"> 
            <slider animation="fade"> 
              <slider-item class="slider-item" v-for="work in allWorksData" :key="work">
                  <img class="all-work__img" v-bind:src="'./assets/imgs/' + work.img">
              </slider-item>
          </slider>
        </div>


        <div class="all-works__description">
          <div class="all-works__about-works">
            <h2>Наши работы</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt velit, nesciunt sit numquam qui necessitatibus totam. Ea cumque sed doloremque dolor ducimus molestias quaerat architecto explicabo at, ullam aperiam.
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt velit, nesciunt sit numquam qui necessitatibus totam.
            </p>
          </div>
          <div class="all-works__contacts">
            <h2>Контакты</h2>
              <section>
              <p>
                г.Киев, переулок Моторный 9а, офис 119
              </p>
              <p>
                <a class="cursor-pointer" href="tel:+001356-356-356-356">+001356-356-356-356</a>
              </p>
              <p>
                <a href="mailto: abcdef@gmail.com">abcdefg@gmail.com</a>
              </p>
              <p>
              C 07:00 до 19:30 
              </p>
      </section>
    
          </div>
          </div> 
      </div>
      <FlikrData></FlikrData>
      <Footer></Footer>
    </div>

</template>
<script>

import Vue from 'vue'
import EasySlider from 'vue-easy-slider'

import FlikrData from "@/components/FlikrData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

Vue.use(EasySlider)

import { Slider, SliderItem } from 'vue-easy-slider'
import { store } from '@/store.js';
export default{
 name: 'AllWorks',
  components: {
    Slider,
    SliderItem,
    Header,
    FlikrData,
    Footer
      
  },
  data() {
    return {
         allWorksData:[
          {id:1, img:'service-page1-main-img.jpg'},
          {id:2, img:'service-page2-main-img.jpg'},
          {id:3, img:'service-page3-main-img.jpg'},
          {id:4, img:'service-page4-main-img.jpg'},
          {id:5, img:'sales.jpg'},
          {id:6, img:'form-img.jpg'},
          {id:7, img:'catalog/catalog-img3.jpg'},
          {id:7, img:'catalog/catalog-img4.jpg'},
      ],
    }
  },
  methods: {
    hello($event) {
      console.log(`hello index: ${$event}`)
    },
  },
  computed: {
      isPageFixed() {
          return store.isNavOpen
      }
    }
}
</script>
<style>
.all-works .wrap-container{
  position: relative;
  z-index: 5;
  
}
.all-works{
  background-color: #3b181e;
  max-width: 1920px;
  /* margin: 0 auto; */
  padding:0 0 30px 0;
}
.all-works a, .all-works a:hover {
  color:currentColor;
  text-decoration: none;
}
.all-works h2 {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 9%;
  font-weight: 400;
  margin: 20px auto;
}
.all-work__img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.all-works__slider{
  margin-top: 30px;
max-width: 38%;
}
.all-works__description{
  text-align: left;
  position:absolute;
  right: 60px;
  top:185px;
  max-width: 55%;
  display: flex;
  padding: 0 25px;
}
.all-works__description div{
  padding: 0 1rem 1rem 1rem;
}
.all-works__about-works{
  width: 60%;
}
  .all-works__contacts{
  width: 40%;
}
.cursor-pointer{
  cursor: pointer;
}
@media screen and (max-width: 1250px){
  .all-works h2 {
  font-size: 2rem;
  margin: 10px auto;
  }
}
@media screen and (max-width: 1060px){
   .all-works__contacts{
    display: none;
  }
  .all-works__about-works{
    width: 100%;
  }
}
@media screen and (max-width: 768px){
.all-works h2 {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 9%;
  font-weight: 400;
  margin: 20px auto;
}
.all-work__img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.all-works__slider{
  margin-top: 30px;
max-width: 100%;
}
.all-works__description{
  text-align: left;
  position:unset;
  max-width: 100%;
  display: unset;
  padding: 0 25px;
 text-align: center;
}
.all-works__contacts{
    display: unset;
  }
}
</style>