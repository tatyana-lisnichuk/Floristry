<template>
<!-- <div class="mainMenu">
  <nav>
    <transition name="fade" mode="out-in">
      <a href="#">
        <i class="fas fa-bars menu" v-if="!show" @click="show = !show" key="menu"><span class="menu-text" >Меню</span></i>
        <i class="fas fa-times clear" v-else @click="show = !show" key="clear">
        <Logo></Logo></i> 
      </a>
    </transition>
    <transition name="fade">
      <ul class="mainMenu__list" v-if="show">
        <li v-for="item in menuItems" :key="item">{{item}}</li>
      </ul>
    </transition>
  </nav>
</div> -->
<div id="fullMenu">
   <nav class="main-nav">
     
     <Burger></Burger>
   </nav>
   <Sidebar>
     <Logo class="menuLogo"></Logo>
     <ul class="sidebar-panel-nav">
       <li><a href="#">свадебная флористика</a></li>
       <li><a href="#">букеты на любые мероприятия</a></li>
       <li><a href="#">композиции</a></li>
       <li><a href="#">оформление мероприятий</a></li>
     </ul>
     <SocialList></SocialList>
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
  //   itemName:String
  // },
  components:{
    Burger,
    Sidebar,
     Logo,
     SocialList
  
  },
   
  data(){
    return{
    //   menuItems:[
    //     'свадебная флористика',
    //     'букеты на любые мероприятия',
    //     'композиции',
    //     'оформление мероприятий'
    // ],
    // show:false,
  }
  }
};
</script>
<style>

/* .menu-text{
  font-size: 20px;
  text-transform: uppercase;
  font-family: "Forum", cursive;
  margin-left: 1rem;
}
.fa-times{
  font-size: 1.3rem;
  float: right;
}
nav {
  display: flex;
  flex-direction:column;
  justify-content: center;
  position: relative;
  width: 100%;
  background: #3b181e;
}
.mainMenu__list{
  background: #3b181e;
  }
.menu.fa-bars{
  background:inherit;
} */

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
</style>