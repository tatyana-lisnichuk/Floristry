<template>
<div class="fullMenu" id="fullMenu">
   <nav class="main-nav">
     <Burger class="burger-position"></Burger>
   </nav>
   <Sidebar>
     <Logo class="menuLogo"></Logo>
     <ul class="sidebar-panel-nav">
       <li class="sidebar-panel__item"><a href="/service-page-wedding">свадебная флористика</a></li>
       <li class="sidebar-panel__item"><a href="/service-page-bouquet">букеты на любые мероприятия</a></li>
       <li class="sidebar-panel__item"><a href="/service-page-compositions">композиции</a></li>
       <li class="sidebar-panel__item"><a href="/service-page-decoration">оформление мероприятий</a></li>
       <li class="sidebar-panel__item"><a href="/">на главную</a></li>
     </ul>
     <SocialList class="menuSocialList"></SocialList>
   </Sidebar>
   
 </div>
</template>

<script>
import Burger from '@/components/Burger';
import Sidebar from '@/components/Sidebar';
import Logo from '@/components/Logo';
import SocialList from '@/components/SocialList';

export default{
  name: 'Menu',
  components:{
    Burger,
    Sidebar,
     Logo,
     SocialList
  },
  data(){
    return{
  }
  }
};
</script>
<style>

.menuSocialList{
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left:95px;
  bottom:-95px;
 }
.burger-position{
  margin-right: 5rem;
}
 .menuLogo {
  margin:50px auto 80px auto;
}
 .main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}
.sidebar-panel-nav{
  max-width: 400px;
  margin:auto;
}
ul.sidebar-panel-nav > li > a {
  color: rgba(255, 255, 255, 0.5);
  font-size: 2.2rem;
  display: block;
  padding-bottom: 0.5em;
  text-transform: uppercase;
  margin:60px 0;
  line-height: 39px;
  letter-spacing: 0.09em;
  transition: all 0.2s ease-in-out;
}
 ul.sidebar-panel-nav > li > a:hover{
  color:#ffffff;
  transform: scale(1.2);
 }
 @media screen and (max-width: 768px){
 .menuSocialList{
  display: none;
  }
  .burger-position{
    /* margin-right: 0rem; */
  }
  ul.sidebar-panel-nav > li > a {
  font-size: 1.6rem;
  margin:50px 0;
}
.sidebar-panel-nav{
  max-width: 300px;
}
 }

@media screen and (max-width: 768px){
  .burger-position{
    margin-right: 0rem;
  }
}

</style>