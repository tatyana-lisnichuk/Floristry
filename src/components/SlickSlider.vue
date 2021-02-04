<template>
  <div class="slider-wrapper">
    <VueSlickCarousel v-bind="settings" >
      <div class="slider-item" v-for="img in sliderImgs" :key="img"><img v-bind:src="'/assets/imgs/' + img.img"></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'SlickSlider',
    components: { VueSlickCarousel },
    props:{
        sliderImgs:Array
      },
    data(){
      return{
      settings:{
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
      }
    }
  }
</script>
<style>
.slider-wrapper{
  margin-top:80px;
  margin-left: 40px;
  max-width: 610px;
  padding-right: 3rem;
}
@media screen and (max-width: 900px){
  .slider-wrapper{
  padding-right: 1rem;
  padding-left: 1rem;
  }
}
@media screen and (max-width: 768px){
  .slider-wrapper{
  padding-right: 1rem;
  padding-left: 2rem;
  margin-left:0 ;
  }
}

@media screen and (max-width: 720px){
  .slider-wrapper{
   max-width: 500px;
  }
}
@media screen and (max-width: 600px){
  .slider-wrapper{
 max-width: 450px;
  }
  
}
@media screen and (max-width: 540px){
  .slider-wrapper{
 max-width: 370px;
  }
}
@media screen and (max-width: 470px){

  
}
</style>