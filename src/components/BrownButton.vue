<template>
<div class="brown-btn-wrapper">
  <a href="#" class="brown-btn">{{buttonName}}</a>
</div>
</template>
<script>
export default{
  name: 'BrownButton',
  props:{
  buttonName:String,
  }
}
</script>
<style>
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
  transition: all 0.2s ease-in-out;
  outline: none;

}
.brown-btn:hover{
color:#000000;
background-color: #fff;
}
</style>