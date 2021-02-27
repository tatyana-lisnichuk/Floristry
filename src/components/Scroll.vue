<template>
<div class="scroll">
 <div class="scroll__innerWrapper">
    <img src="assets/imgs/svg/scroll.svg" alt="scroll">
  </div>
</div>
</template>
<script>
export default{
  name: 'Scroll',
}
</script>
<style>
.scroll {
  position: relative;
  display: flex;
  justify-content: center;
   background-color: #fff;
}
.scroll__innerWrapper{
  width: 42px;
  height: 62px;
  position: absolute;
  right:-15%;
  bottom: 0;
 
}
@media screen and (max-width: 768px){
  .scroll {
    display: none;
    }
}
</style>