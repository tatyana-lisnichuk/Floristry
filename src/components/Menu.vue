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


/* #fullMenu{
   height: 100%;
   overflow:hidden;
 }

body{
   border: 0; margin: 0; padding: 0;
   font-family: 'Lato';
   height: 100%;
   background: rgb(101,31,87);
   background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
 } */

 .menuLogo {
   margin:auto;
   
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>