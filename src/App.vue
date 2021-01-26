<template>
  <div class="app">
  <MainPage></MainPage>
  <!-- <ServicePage v-for="page in servicePageList" :pageTitle="page.pageTitle" :description="page.description" :mainImg="page.mainImg" :key="page.pageTitle"></ServicePage> -->
  </div>
</template>

<script>
// import ServicePage from '@/components/ServicePage'
import MainPage from '@/components/MainPage'
 
export default {
  name: 'App',
  components: {
MainPage, 
// ServicePage
  },
  data(){
    return{
    servicePageList:[
      {
        mainImg:'service-page1-main-img.jpg',
        pageTitle:'букеты на мероприятия',
        description:'У нас есть огромное разноообразие букетов на любое событие. Вы сможете приобрести как нежный букет, так и яркий, а также мужские, круглые, вертикалье, веерообразные, букеты-зонтики, букеты в вегетативной технике и много  других экзотических видов.',
        // sliderImgs:["../assets/imgs/1.jpg", "../assets/imgs/2.jpg", "../assets/imgs/3.jpg", "../assets/imgs/4.jpg"]
      }
    ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.app {
  font-family: "Forum", cursive;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
a{
  text-decoration:none;
  color: inherit;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
li{
  list-style: none;
  padding-left: 0;
}
</style>
