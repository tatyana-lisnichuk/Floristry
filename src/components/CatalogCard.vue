<template>
<div class="catalog__card">
  <div class="catalog__cardBorders">
    <div class="catalog__cardBcg">
      <div class="card-hover-background"></div>
      <img
        :src="catalogCardImg"
        alt="flowers"
        class="background-image"
      /> 
      <div class="card-content">
        <div class="card-header">
          <div class="header-number">{{cardNumber}}</div>
          <div class="header-line"></div>
        </div>
        <div class="card-title">
          {{cardTitle}}
        </div>
        <a :href="catalogCardLink" class="catalog-link-button">смотреть работы</a>
      </div>
    </div>
  </div>
</div>

</template>
<script>
export default{
  name: 'CatalogCard',
  props:{
        cardTitle:String,
        cardNumber:String,
        cardImg:String,
        cardLink:String
      },
      computed: {
    catalogCardImg() {
      return './assets/imgs/catalog/' + this.cardImg
    },
    catalogCardLink(){
      return '/service-page-' + this.cardLink
    }
  }
}
</script>
<style>

.catalog__card {
  width: calc(100% / 4);
  min-height: 60px;
  /* margin: 30px; */
}

.catalog__cardBcg {
  width: 100%;
  height: 450px;
  position: relative;
}
.card-hover-background {
  display: none;
  width: 100%;
  height: 450px;
  background: rgba(0, 0, 0, 0.6);
}
.catalog__card :hover .card-hover-background {
  display: block;
  position: absolute;
}
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.catalog__cardBorders {
  padding: 10px;
  border: 1px solid transparent;
}
.catalog__card:hover .catalog__cardBorders {
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.header-line {
  border-bottom: 1px solid #fff;
  width: 70px;
}
.header-number {
  padding-left: 10px;
  padding-right: 10px;
}
.card-header {
  display: flex;
  font-size: 20px;
  line-height: 22px;
  line-height: 100%;
  position: absolute;
  top: 36px;
  left: 20px;
}
.card-title {
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-size: 16px;
  line-height: 27px;
  line-height: 170%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 90%;
}

.catalog__card :hover .header-number {
  position: absolute;
  bottom: -20px;
  left: 80px;
}
.catalog__card :hover .header-line {
  position: absolute;
  bottom: -20px;
  left: 10px;
}
.catalog__card :hover .card-title {
  position: absolute;
  bottom: 90px;
}

.catalog-link-button {
  padding: 18px 30px;
  background: #ffffff;
  border: 1px solid transparent;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 12px;
  color: #ffffff;
  border-radius: 5px;
  color: #010001;
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: none;
}
.catalog__card :hover .catalog-link-button {
  display: block;
}
</style>