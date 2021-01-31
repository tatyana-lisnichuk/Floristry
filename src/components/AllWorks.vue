<template>
  <div class="all-works">
    <Header class="all-works__header container"></Header>
   <div class="all-works-slider__wrapper">
   <h2>Наши работы</h2>
    <VueSlickCarousel v-bind="settings" >
      <div class="slider-item" v-for="work in allWorksData" :key="work">
        <img class="all-work__img" v-bind:src="'./assets/imgs/' + work.img">
        </div>
    </VueSlickCarousel>
    </div>

      <section class="footer">
        <div class="footer-line"></div>
        <div class="footer-grid">
          <a href="/service-page-wedding" class="footer-grid-item">Cвадебная флористика</a>
          <a href="/service-page-bouquet" class="footer-grid-item">Букеты на любые мероприятия</a>
          <a href="/service-page-wedding" class="footer-grid-item">Букеты невесты</a>
          <a href="/service-page-compositions" class="footer-grid-item">Композиции</a>
          <a href="/service-page-decoration" class="footer-grid-item">Оформление мероприятий</a>
        </div>
        <div>
          <SocialList class="footer-socials-list"></SocialList>
        </div>
      </section>
    <VueInstagram></VueInstagram>
  </div>
  
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import Header from "@/components/Header";

  

  export default {
    name: 'AllWorks',
    components: { 
        VueSlickCarousel,
        Header,
        // VueInstagram
        },
    props:{
     
      },
    data(){
      
      return{
      settings:{
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        
      },
      allWorksData:[
      {img:'1.jpg'},
          {img: '2.jpg' },
          {img: '3.jpg' },
          {img: '4.jpg' },
          {img: '5.jpg' },
          {img: '6.jpg' },
          {img:'7.jpg'},
           {img:'2-1.jpg'},
          {img: '2-2.jpg' },
          {img: '2-3.jpg' },
          {img: '2-4.jpg' },
          {img: '2-5.jpg' },
          {img: '2-6.jpg' },
           {img: '2-7.jpg' },
           {img: '2-8.jpg'},
           {img:'4-1.jpg'},
          {img: '4-2.jpg' },
          {img: '4-3.jpg' },
          {img: '4-4.jpg' },
          {img: '4-5.jpg' },
          {img: '4-6.jpg' },
          {img: '4-7.jpg' },
          {img:'4-8.jpg'}
      ],
      // info: null,
      // loading: true,
      // errored: false
      }
    },
    // mounted () {
    // fetch
    //   .get('https://api.unsplash.com/photos/?client_id=d0ebc52e406b1ac89f78ab30e1f6112338d663ef349501d65fb2f380e4987e9e')
    //   .then(response => {
    //     this.info = response.data
    //   })
      // .catch(error => {
      //   console.log(error)
      //   this.errored = true
      // })
      // .finally(() => this.loading = false)
  // }
  }
</script>
<style>
.all-works{
  background-color: #3b181e;
  max-width: 1920px;
  min-height: 1000px;
  margin: auto;
  padding: 0px 50px;
}
.all-works h2 {
  
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: 9%;
  font-weight: 400;
  margin: 50px auto;
}
.all-works-slider__wrapper{
  margin-bottom: 3rem;
}
.all-works .slick-slide{
padding: 30px;
width: 300px;
height: 450px;
}
.slick-dots li button:before{
  color: #fff;
  margin-top: 1rem;
 
}
.slick-dots li.slick-active button:before{
  opacity: 0.75;
  color: #fff;
}
.all-work__img{
  object-fit: cover;
}
.all-works footer{
  /* margin-top: 5rem; */
}
</style>