<template>
    <div class="service-page__body">
        <div class="service-page__left">

         <!-- <img :src="require(mainImg)"> -->
          <div class="logo">
          <img src="../assets/imgs/Logo.svg">
          </div>
        </div>
        <div class="service-page__right">
          <header class="service-page__header">
            <div>
              <img src="../assets/imgs/Menu-burger.svg">
            </div>
          </header>
            <main>
            <div>
            <h2>{{pageTitle}}</h2>
            <p class="service-page__text">{{description}}</p>
            <MainButton buttonName="Заказать"></MainButton>
            </div>
            <section>
              here will be slider
              <div class="service-page__slider">
                <div>
                <img src="../assets/imgs/5.jpg">
              </div>
              <div>
                <img src="../assets/imgs/6.jpg">
              </div>
              <div>
                <img src="../assets/imgs/7.jpg">
              </div>
              <div>
                <img src="../assets/imgs/8.jpg">
              </div>
              

              </div>
            </section>
          </main>
          <footer>Больше фотографий в профиле <i class="fab fa-instagram"></i></footer>
        </div>
    </div>
</template>
<script>
import MainButton from '@/components/MainButton';

export default{
  name: 'ServicePage',
    props:{
        // mainImg:String,
        pageTitle:String,
        description:String,
        // sliderImgs
      },
      components:{
        MainButton
      },
  data(){
    return{
      // servicePage: {
      //   mainImg:'@assets/imgs/service-page1-main-img.jpg',
      //   pageTitle:'букеты на мероприятия',
      //   description:'У нас есть огромное разноообразие букетов на любое событие. Вы сможете приобрести как нежный букет, так и яркий, а также мужские, круглые, вертикалье, веерообразные, букеты-зонтики, букеты в вегетативной технике и много  других экзотических видов.',
      //   sliderImgs:["../assets/imgs/1.jpg", "../assets/imgs/2.jpg", "../assets/imgs/3.jpg", "../assets/imgs/4.jpg"]
      // }
    };
  },
}
</script>
<style scope>
*{
  box-sizing: border-box;
  margin: 0;
  padding:0;
}
.service-page__body{
background-color: #3B181E;
display: flex;
gap:100px;
min-height: 1080px;
max-width: 1920px;
margin:auto;
font-family: 'Forum', cursive;
color:white;
}
h2{
font-size: 50px;
text-transform: uppercase;
letter-spacing: 9%;
max-width: 365px;
text-align: left;
font-weight: 400;
margin-bottom: 40px;
}
main p{
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  padding-bottom:70px;
  margin-bottom: 30px;
}
main div{
  position: relative;
}
.service-page__right{
  margin-left: 16px;
  width: 50%;
  position: relative;
  padding-bottom:40px;
}
.service-page__img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
header div {
text-align: right;
width: 100%;
}
.service-page__text{
  max-width: 565px;
}
header{
  margin:80px 85px;
}
.service-page__left{
  position:relative;
  width: 50%;
  /* background-image:url('../assets/imgs/service-page1-main-img.jpg'); */
  background-repeat: no-repeat;
}
.logo{
  position:absolute;
  top:87px;
  left:95px;
}
/* button{
  color:currentColor;
  background-color: #3B181E;
  border:1px solid white;
  padding:16px 30px;
  text-transform: uppercase;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  position: absolute;
  bottom: 0;
  left:0;
}
button:hover{
color:#000000;
background-color: #fff;
} */
.service-page__slider{
  display:flex;
  gap:20px;
  margin-top:40px;
}
footer{
position:absolute;
right: 95px;
bottom: 30px;
}
</style>