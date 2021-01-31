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
}

</style>