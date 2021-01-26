<template>
<div>
  <button class="dark-btn">{{buttonName}}</button>
</div>
</template>
<script>
export default{
  name: 'DarkButton',
  props:{
  buttonName:String,
  }
}
</script>
<style>
a.button {
  text-decoration: none;
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
}
.dark-btn:hover {
  background: rgba(104, 91, 91, 0.8);
}
</style>