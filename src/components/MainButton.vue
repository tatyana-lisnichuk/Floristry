<template>
<div>
  <button>{{buttonName}}</button>
</div>
</template>
<script>
export default{
  name: 'MainButton',
  props:{
  buttonName:String,
  }
}
</script>
<style>
button{
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
button:hover{
color:#000000;
background-color: #fff;
}
</style>