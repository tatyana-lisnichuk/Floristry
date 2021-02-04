<template>
  <div class="bootstrap-slider">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ccc"
      img-width="330"
      img-height="450"
      style="text-shadow: 1px 1px 2px #000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Букет невесты и свадебное оформление"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="./assets/imgs/catalog/catalog-img1.jpg"
      ></b-carousel-slide>
       <b-carousel-slide
        caption="Букеты на торжества"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="./assets/imgs/catalog/catalog-img2.jpg"
      ></b-carousel-slide>
       <b-carousel-slide
        caption="Композиции"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="./assets/imgs/catalog/catalog-img3.jpg"
      ></b-carousel-slide>
       <b-carousel-slide
        caption="Оформление мероприятий"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="./assets/imgs/catalog/catalog-img4.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style>
.bootstrap-slider{
  display: none;
}
@media screen and (max-width: 768px){
.bootstrap-slider{
  display: inherit;
  padding:1rem;
}
}
</style>
