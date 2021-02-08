<template>
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
</template>
<script>
import SocialList from '@/components/SocialList';
  export default {
    name: 'SlickSlider',
    components:{
      SocialList
    }
  }
</script>
<style>
.footer{
  padding-bottom:30px;
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
    margin: 25px;
} 
a.footer-grid-item {
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;
  margin: 10px;
}
a.footer-grid-item:hover {
 opacity:0.8;
 color:inherit;
}

@media screen and (max-width: 768px){
.footer-grid{
  flex-direction: column;
}
}

</style>