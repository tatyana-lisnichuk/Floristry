<template>
  <div class="slider-wrapper">
    <VueSlickCarousel v-bind="settings" >
      <div><img src="/assets/imgs/2.jpg"></div>
      <div ></div> 
        <!-- <img :src="('./assets/imgs/' + slider_data_item.img)">-->
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
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
    // props:{
    //     sliderImgs:[
    //       'img1',
    //       'img2',
    //       'img3',
    //       'img4',
    //       'img5',
    //       'img6',
    //       'img7',
    //       'img8'
    //     ]
    //   },
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