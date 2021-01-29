<template>
    <div class="wrapper service-page__main service-page" id="service-page">
  
        <Header class="service-page__header container"></Header>
     
            <div class="service-page__left" :style="{backgroundImage:'url('+ mainImg +')'}">
              <!-- этот вариант с картинками работает!!! -->
              <!-- <img class="service-page__img" :src="img"> -->
            </div>
            <div class="service-page__right">
                <main>
                <div class="service-page__text-part">
                  <h2>{{pageTitle}}</h2>
                  <p class="service-page__text">{{description}}</p>
                  <BrownButton class='service-page__brown-btn' buttonName="Заказать"></BrownButton>
                </div>
                  <SlickSlider></SlickSlider>
                    <!-- <ServicePageSlider></ServicePageSlider> -->

              </main>
              
            </div>
      <footer>Больше фотографий в профиле <i class="fab fa-instagram footer__insta"></i></footer>
    </div>
</template>
<script>
import BrownButton from '@/components/BrownButton';
import Header from '@/components/Header';
import SlickSlider from './SlickSlider.vue';
export default{
  name: 'ServicePage',
    props:{
        mainImg:String,
        pageTitle:String,
        description:String,
       
      },
        // slider_data:{
        //   type:Array,
        //   default:() => []
        // },
        //  slider_data_item:{
        //   type: Object,
        //   default:()=>{}
        // },
        
      components:{
        BrownButton,
        Header,
        SlickSlider
      },
  data(){

    return{
      // servicePage: {
        // mainImg:'@assets/imgs/service-page1-main-img.jpg',
        // pageTitle:'букеты на мероприятия',
        // description:'У нас есть огромное разноообразие букетов на любое событие. Вы сможете приобрести как нежный букет, так и яркий, а также мужские, круглые, вертикалье, веерообразные, букеты-зонтики, букеты в вегетативной технике и много  других экзотических видов.',
      //   sliderImgs:["../assets/imgs/1.jpg", "../assets/imgs/2.jpg", "../assets/imgs/3.jpg", "../assets/imgs/4.jpg"]
      // }
    };
  },
  //этот вариант с картинками работает!!!
  // computed: {
  //   img() {
  //     return './assets/imgs/' + this.mainImg
  //   }
  // }
}
</script>
<style>

.service-page__main{
  position: relative;
  min-height: 1080px;
}

.service-page h2{
font-size: 50px;
text-transform: uppercase;
letter-spacing: 9%;
max-width: 370px;
text-align: left;
font-weight: 400;
margin-bottom: 40px;
}

.service-page main p{
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  margin-bottom: 30px;
}
.service-page__text-part{
padding-bottom:50px;

position: relative;
}
.service-page__brown-btn{
  position: absolute;
  bottom: 0;
  left:0;
}

.service-page main{
  position: relative;
  padding-top: 115px;
   margin: auto 0;
}

.service-page__right{
  margin-left: 16px;
  width: 50%;
  position: relative;
  padding-left: 40px;
  float:right;
}
.service-page__img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.service-page__text{
  max-width: 565px;
}

.service-page__left{
  width: 50%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  object-fit:cover;
  top:0;

}
.service-page__slider{
  display:flex;
  gap:20px;
  margin-top:40px;
}
.service-page footer{
position:absolute;
right: 95px;
bottom: 30px;
}
.footer__insta{
  font-size: 1rem;
  margin-left: 30px;
}
</style>