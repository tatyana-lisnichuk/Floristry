<template>
<div class="scroll">
 <div class="scroll__innerWrapper">
    <a href="#" class="icon-scroll-img">
    <img src="../../public/assets/imgs/svg/scroll.svg" alt="scroll">
    </a>
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
}
.scroll__innerWrapper{
  width: 37px;
  height: 56px;
  position: absolute;
  bottom: 0;
}

</style>