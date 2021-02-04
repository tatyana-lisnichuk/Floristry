<template>
<div class="catalog__title">
  <div class="catalog__titleName">Каталог услуг</div>
  <div class="catalog__divider"></div>
  <div class="catalog__bcgTitle">Каталог услуг</div>
</div>
</template>
<script>
export default{
  name: 'CatalogTitle',
}
</script>

<style>
.catalog__title {
  align-items: center;
  margin:0 auto;
}
.catalog__titleName {
  margin-top: 40px;
  font-size: 30px;
  line-height: 33px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.catalog__divider{
  padding-top: 22px;
  border-bottom: 2px solid #fff;
  width: 86px;
  margin:0 auto;
}

.catalog__bcgTitle{
  font-size: 220px;
  line-height: 243px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.03;
  position: relative;
  margin: 0 -40px;
}
@media screen and (max-width: 1715px){
  .catalog__bcgTitle{
    font-size: 200px;
  }
}
@media screen and (max-width: 1560px){
  .catalog__bcgTitle{
    font-size: 180px;
  }
}
@media screen and (max-width: 1410px){
  .catalog__bcgTitle{
    font-size: 160px;
  }
}
@media screen and (max-width: 1260px){
  .catalog__bcgTitle{
    font-size: 140px;
  }
  .catalog__titleName {
  margin-top: 0px;
  }
}
@media screen and (max-width: 1110px){
.catalog__bcgTitle{
    font-size: 120px;
  }
}
@media screen and (max-width: 960px){
.catalog__bcgTitle{
    font-size: 90px;
  }
}
@media screen and (max-width: 768px){
.catalog__bcgTitle{
    display:none;
  }
}
</style>