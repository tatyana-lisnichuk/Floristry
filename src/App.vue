<template>
  <div class="app">
  <router-view></router-view>
  </div>
</template>

<script>
 
export default {
  name: 'App',
  components: {

  },
  data(){
    return{
    }
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding:0;
}
.app {
  font-family: "Forum", cursive;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
}
.site-wrapper {
  margin: 0 auto;
  max-width: 1920px;
  width:100vw;
  background: #3b181e;
  /* padding-bottom:50px; */
  
}
a, a:hover,
a:active {
  text-decoration:none;
  color: white;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
li{
  list-style: none;
  padding-left: 0;
}
input{
  outline: none;
}
.fab, i {
  color:white;
}
.wrap-container {
  max-width:1720px;
  padding: 0 60px;
  width:100%;
  margin: 0 auto;
}

/* buttons styles */
.brown-btn-wrapper{
  padding:15px 0;
}
.brown-btn{
  color:currentColor;
  background-color: #3B181E;
  border:1px solid white;
  padding:16px 30px;
  text-transform: uppercase;
  cursor:pointer;
  outline: none;
  transition: all 0.3s ease-in-out;

}
.brown-btn:hover{
color:#000000;
background-color: #fff;
}
.black-btn {
  padding: 18px 30px;
  background: #010001;
  border: 1px solid transparent;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 11px;
  margin-top: 52px;
  color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

}
.black-btn:hover{
 background: #fff;
 color:black;
}
.dark-btn{
  padding: 19px 30px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 12px;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
}
a.dark-btn:hover {
  background: rgba(104, 91, 91, 0.8);
  color: #ffffff;
}
a.brown-btn, a.brown-btn:hover, a.brown-btn:active,
a.black-btn, a.black-btn:hover, a.black-btn:active,
a.dark-btn, a.dark-btn:hover, a.dark-btn:active,
li.sidebar-panel__item a, li.sidebar-panel__item a:hover,
li.sidebar-panel__item a:active,
a.footer-grid-item, a.footer-grid-item:hover, a.footer-grid-item:active,
a.catalog-link-button, a.catalog-link-button:hover,  a.catalog-link-button:active
{
  text-decoration: none;
}
/* slick slider styles */
.slick-slide{
    cursor: pointer;
   outline: none;
   padding:0 10px;
    transition: all 0.4s ease-in-out;
}
.slick-slide:hover{
  transform: scale(1.2);
}
.fixed{
  position: fixed;
}

@media screen and (max-width: 768px){
  .wrap-container {
  padding: 0 60px;
  }
}
@media screen and (max-width: 320px){
  .wrap-container {
  padding: 0 20px;
  }
}
</style>
