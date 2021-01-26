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
  
  /* margin-top: 40px; */
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
}
</style>