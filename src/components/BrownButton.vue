<template>
<div>
  <a href="#" class="brown-btn">{{buttonName}}</a>
  <!-- <button class="brown-btn">{{buttonName}}</button> -->
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
.brown-btn{
  color:currentColor;
  background-color: #3B181E;
  border:1px solid white;
  padding:16px 30px;
  text-transform: uppercase;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  position: absolute;
  bottom: 0;
  left:0;
}
.brown-btn:hover{
color:#000000;
background-color: #fff;
}
</style>