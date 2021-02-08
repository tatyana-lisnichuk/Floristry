<template>
 <div class="site-wrapper"
 :class="{ 'fixed' : isPageFixed}">
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
      <section class="sales wrap-container" id="sales">
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
      <Footer></Footer> 
    </div>
  
</template>

<script>
import SocialList from '@/components/SocialList';
import Footer from '@/components/Footer';
import Scroll from '@/components/Scroll';
import ShowCatalog from '@/components/ShowCatalog';
import CatalogTitle from '@/components/CatalogTitle';
import CatalogCard from '@/components/CatalogCard';
import ModalWindow from '@/components/ModalWindow';
import BootstrapSlider from '@/components/BootstrapSlider';
import Header from '@/components/Header';

import { store } from '@/store.js';
export default{
  name: 'MainPage',
  components:{
    Footer,
    Scroll,
    ShowCatalog,
    CatalogTitle,
    CatalogCard,
    ModalWindow,
    Header,
    BootstrapSlider,
    SocialList
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
}

.sales__grid {
  display: flex;
  max-width: 1220px;
  margin: auto;
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
  background-color: #fff;
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
@media screen and (max-width: 1200px){
.catalog__grid {
/* display: flex; */
  gap:10px;
  flex-wrap: wrap;
  justify-content: center;
}
}
@media screen and (max-width: 1110px){
.main__title{
    font-size: 100px;
    padding-left: 20px;
    padding-right: 20px;
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
  background: url("/assets/imgs/response/response-main.jpg") no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
  .main__title {
    font-size: 70px;
    max-width: 570px;
  }
  .main__footer{
    margin-top: 0px;
    margin-bottom: 50px;
  }
  .main__gradient {
    display: none;
  }
  .catalog {
    min-height: 100%;
    padding-top: 0px;
    padding-bottom:0px;
  }
  .sales__grid {
    margin: auto;
    align-items:center;
  flex-direction:column;
  position: relative;
  max-width: 453px;
  min-height:560px ;
  }
  .sales__item-2-3 {
    width: 100%;
    height: 323px;
    margin-top: 2rem;
  }
  .sales__item-1-3 {
    width: 100%;
    position: absolute;
    top:310px;
  }
  .sales__item-1-3-content {
    text-align:center;
  }
  .sales__title {
    width: 100%;
    text-align: center;
  }
  .sales__line {
    margin: 20px auto;
  }
  .sales__text {
    max-width: 352px;
    margin-left: auto;
    margin-right: auto;
  }
.catalog__grid{
    display: none;
  }
} 
.fixed{
  position: fixed;
}

@media screen and (max-width: 550px){
  .main__title {
  font-size: 50px;
  max-width: 100%;
  }
  .sales__item-2-3 {
    margin-top: 1rem;
  }
  .sales__item-1-3 {
    top:250px;
  }

  .main__title {
    font-size: 40px;
  line-height: 42px;
  letter-spacing: 9%;
  
  }
  .main__description {
  justify-content: center;
  gap:35px;
  }
  .main{
  min-height: 700px;
  }
}

@media screen and (max-width: 400px){
  .main__title {
  font-size: 30px;

  }
}
</style>
