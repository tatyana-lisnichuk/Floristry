<template>
<div class="showCatalog">
  <div class="showCatalog__innerWrapper">
    <div class="showCatalog__text"><a id="showCatalog" href="#catalog">смотреть каталог <i class="fas fa-arrow-right"></i></a></div>
  </div>
</div>
</template>
<script>
export default{
  name: 'ShowCatalog',
}
</script>

<style>
.showCatalog {
 position: relative;
 }
.fa-arrow-right{
  margin-left: 1rem;
}
.showCatalog__innerWrapper {
    position: absolute;
    height: 100%;
    left:-2.6rem;

} 
.showCatalog__text {
  white-space: nowrap;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg); /* Safari/Chrome */
  -moz-transform: rotate(90deg);    /* Firefox */
  -o-transform: rotate(90deg);      /* Opera */
  -ms-transform: rotate(90deg); /* IE 9 */

  font-size: 20px;
  letter-spacing: 0.06em;

margin-right: -5rem;
margin-left:-5rem;
 margin-top: 5rem;

}
.showCatalog__text:hover, 
.showCatalog__icon:hover {
opacity: 0.6;
}
.showCatalog__icon{
  width: 14px;
  height: 14px;
  position: absolute;
  right: 0;
  bottom: 0;
}
#showCatalog{
  text-decoration:none;
  color: white;
}
#showCatalog:hover{
  text-decoration:none;
  color: white;
}
@media screen and (max-width: 768px){
  .showCatalog {
    display: none;
    }
}

</style>