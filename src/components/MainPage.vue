<template>
 <div class="site-wrapper">
      <section class="main" id="main-page">
       <Header class="wrap-container"></Header>
        <div class="main__description">
          <div class="main__title">флористика с душой</div>
          <!-- grey button -->
          <div>
            <a href="/all-works" class="dark-btn">Смотреть работы</a>
          </div>

        </div> 
        <div class="wrap-container main__footer">
          <SocialList></SocialList>
          <Scroll></Scroll>
          <ShowCatalog></ShowCatalog>
        </div>
        <div class="main__gradient"></div>
      </section>

      <section class="catalog wrap-container" id="catalog">
           
         <CatalogTitle></CatalogTitle>
        <div class="catalog__grid">
          <CatalogCard cardTitle="букет невесты и свадебное оформление" cardNumber="01" cardImg='catalog-img1.jpg' cardLink='wedding'></CatalogCard>
          <CatalogCard cardTitle="букеты на торжества" cardNumber="02" cardImg='catalog-img2.jpg' cardLink='bouquet'></CatalogCard>
          <CatalogCard cardTitle="композиции" cardNumber="03" cardImg='catalog-img3.jpg' cardLink='compositions'></CatalogCard>
          <CatalogCard cardTitle="оформление мероприятий" cardNumber="04" cardImg='catalog-img4.jpg' cardLink='decoration'></CatalogCard>
        </div>
      </section>
    <BootstrapSlider></BootstrapSlider>
      <section class="sales" id="sales">
        <div class="sales__grid">
          <div class="sales__item-1-3">
            <div class="sales__item-1-3-content">
              <div class="sales__title">акционные предложения</div>
              <hr class="sales__line">
              <div class="sales__text">
                При заказе свадебного оформления предоставляется скидка на
                букет невесты и бутоньерку в размере 30%
              </div>
              <!-- black button -->
              <div v-on:click="showModal">
                <a href="#sales" class="black-btn">заказать оформление</a>
              </div>
              <!-- modal window -->
              <ModalWindow
                v-if="isModalVisible"
                @closeModal="closeModal"
                >
              </ModalWindow>
            </div>
          </div>
          <div class="sales__item-2-3">
            <div class="sales__item-2-3-content">
              <div class="sales__img">
                <img
                src="assets/imgs/sales.jpg"
                alt="flowers"
                >
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
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
      
    </div>
</template>

<script>

import SocialList from '@/components/SocialList';
import Scroll from '@/components/Scroll';
import ShowCatalog from '@/components/ShowCatalog';
import CatalogTitle from '@/components/CatalogTitle';
import CatalogCard from '@/components/CatalogCard';
import ModalWindow from '@/components/ModalWindow';
import BootstrapSlider from '@/components/BootstrapSlider';
import Header from '@/components/Header';

export default{
  name: 'MainPage',
  components:{
    SocialList,
    Scroll,
    ShowCatalog,
    CatalogTitle,
    CatalogCard,
    ModalWindow,
    Header,
    BootstrapSlider
    },

 data(){
    return{
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
    }
 }

</script>

<style>

.site-wrapper {
  margin: 0 auto;
  max-width: 1920px;
  width:100vw;
  background: #3b181e;
  padding-bottom:50px;
}

.main {
  min-height: 1020px;
  margin-bottom:0;
  background: url("/assets/imgs/hero-img.jpg") no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 30px 0px;
  min-height: 400px;
  justify-content: space-between;
}

.main__title {
  font-size: 7.5rem;
  line-height: 8.25rem;
  letter-spacing: 0.09em;
  max-width: 820px;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
}

.main__footer{
  width: 100%;
  margin-top: 10px;
  margin-bottom: -40px;
  display: flex;
  justify-content: space-between;
}

.main__gradient {
  min-height: 100px;
  /* height: 100%; */
  background: linear-gradient(0deg, #3b181e 3.33%, rgba(59, 24, 30, 0) 100%);
  width: 100%;
}

.catalog {
  margin-top: 50px;
  margin-bottom: 50px;
  min-height: 896px;
  padding-top: 170px;
  padding-bottom:96px;
  border-color: #3b181e;
}

.catalog__grid {
  margin-top: -110px;
  display: flex;
  gap:50px;
  /* flex-wrap: wrap; */
  
}

.sales__grid {
  margin: 60px;
  padding: 30px;
  display: flex;
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;
}
.sales__item-1-3 {
  margin: 10px;
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.sales__item-2-3 {
  width: calc(100% / 3 * 2);
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.sales__item-1-3-content {
  text-align:left;
}

.sales__item-2-3-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
}
.sales__title {
  font-size: 30px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  width: 220px;
}
.sales__line {
  margin: 15px auto 25px 0;
  width: 86px;
}
.sales__text {
  max-width: 352px;
  margin-bottom: 52px;
}

.sales__image {
  max-width: 697px;
  height: 100%;
  object-fit: cover;
  text-align: center;
}
.footer-line {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 1816px;
  margin: 21px 52px;
}
.footer-grid
{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.footer-socials-list{
  flex-direction: row;
  justify-content: center;
 
} 
.footer-grid-item {
  color: rgba(255, 255, 255, 0.5);
  margin: 25px;
}
.footer-social {
  margin: 25px;
} 
@media screen and (max-width: 1500px){
.catalog__grid {
  gap:5px;
  /* flex-wrap: wrap; */
}
}
@media screen and (max-width: 1715px){
  .main__title{
    /* font-size: 100px; */
  }
}
@media screen and (max-width: 1560px){
  .main__title{
    /* font-size: 180px; */
  }
}
@media screen and (max-width: 1410px){
  .main__title{
    font-size: 110px;
  }
}
@media screen and (max-width: 1260px){
  .main__title{
    /* font-size: 140px; */
  }
}
@media screen and (max-width: 1110px){
.main__title{
    font-size: 100px;
    padding-left: 20px;
    padding-right: 20px;
  }
.catalog__grid {
  margin-top: 30px;
  /* display: flex; */
  gap:10px;
  flex-wrap: wrap;
  justify-content: center;
  
}
}
@media screen and (max-width: 960px){
.main__title{
    font-size: 90px;
     padding-left: 50px;
    padding-right: 50px;
    max-width: 700px;
  }

} 
@media screen and (max-width: 768px){
  .main {
  min-height: 1020px;
  /* margin-bottom:0; */
  background: url("/assets/imgs/response/response-main.jpg") no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}
/* 
.main__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 30px 0px;
  min-height: 400px;
  justify-content: space-between;
} */

.main__title {
  font-size: 70px;
  /* line-height: 77px; */
  /* letter-spacing: 0.09em; */
  max-width: 570px;
  /* text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  text-transform: uppercase; */
}

.main__footer{
  /* width: 100%; */
  margin-top: 0px;
  margin-bottom: 50px;
  /* display: flex; */
  /* justify-content: space-between; */
}

.main__gradient {
  display: none;
}

.catalog {
  /* margin-top: 50px; */
  margin-bottom: 0px;
  min-height: 100%;
  padding-top: 0px;
  padding-bottom:0px;
  /* border-color: #3b181e; */
}

.catalog__grid { 
  /* margin-top: 30px;  */
  /* display: flex; */
  gap:5px;
  /* flex-wrap: wrap; */
  
} 

.sales__grid {
  margin: 0px;
  padding: 30px;
  display: flex;
  /* width: 100%; */
  /* margin-left: auto;
  margin-right: auto; */
}
.sales__item-1-3 {
  margin: 10px;
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.sales__item-2-3 {
  width: calc(100% / 3 * 2);
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.sales__item-1-3-content {
  text-align:left;
}

.sales__item-2-3-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
}
.sales__title {
  font-size: 30px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  width: 220px;
}
.sales__line {
  margin: 15px auto 25px 0;
  width: 86px;
}
.sales__text {
  max-width: 352px;
  margin-bottom: 52px;
}

.sales__image {
  max-width: 697px;
  height: 100%;
  object-fit: cover;
  text-align: center;
}
.footer-line {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 1816px;
  margin: 21px 52px;
}
.footer-grid
{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.footer-socials-list{
  flex-direction: row;
  justify-content: center;
 
} 
.footer-grid-item {
  color: rgba(255, 255, 255, 0.5);
  margin: 25px;
}
.footer-social {
  margin: 25px;
} 
} 

</style>
