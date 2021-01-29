<template>
<div id="fullMenu">
   <nav class="main-nav">
    
     <Burger class="burger-position"></Burger>
     
   </nav>
   <Sidebar>
     <Logo class="menuLogo"></Logo>
     <ul class="sidebar-panel-nav">
       <li><a href="/service-page-wedding">свадебная флористика</a></li>
       <li><a href="/service-page-bouquet">букеты на любые мероприятия</a></li>
       <li><a href="/service-page-compositions">композиции</a></li>
       <li><a href="/service-page-decoration">оформление мероприятий</a></li>
       <li><a href="/">на главную</a></li>
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
  // props:{

  // },
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

.burger-position{
  margin-right: 6rem;
}
 .menuLogo {
  margin:96px auto 160px auto;
}
 .main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav > li > a {
  color: rgba(255, 255, 255, 0.5);
  font-size: 2.2rem;
  display: block;
  padding-bottom: 0.5em;
  text-transform: uppercase;
  margin:40px auto;
  line-height: 39px;
  letter-spacing: 0.09em;
  transition: all 0.2s ease-in-out;
}
 ul.sidebar-panel-nav > li > a:hover{
  color:#ffffff;
  transform: scale(1.2);
 }
 .menuSocialList{
  color: rgba(255, 255, 255, 0.5);
  position: absolute;

  left:95px;
  bottom:95px;
 }
</style>