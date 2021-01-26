<template>
<div>
  <a href="#" class="black-btn">{{buttonName}}</a>

</div>
</template>
<script>
export default{
  name: 'BlackButton',
  props:{
  buttonName:String,
  }
}
</script>
<style>
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

}
.black-btn:hover{
 background: #fff;
 color:black;
}
</style>