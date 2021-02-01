<template>
<div class="logo">
  <a href="/">
    <img  class="logo__img" src="../../public/assets/imgs/svg/Logo.svg" alt="logo">
  </a>
</div>
</template>
<script>
export default{
  name: 'Logo',
}
</script>
<style>
.logo {
  width: 10.9rem;
  height: 3.4rem;
  z-index: 20;
}
.logo__img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 450px){
.logo {
  width: 6.2rem;
  height: 1.9rem;
}
}
</style>