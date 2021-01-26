<template>
<div class="socials-list">
    <a class="social" href="#">
      <i class="fab fa-instagram"></i>
    </a>
    <a class="social" href="#">
      <i class="fab fa-facebook"></i>
    </a>
    <a class="social" href="#">
      <i class="fab fa-viber"></i>
    </a>
    <a class="social" href="#">
      <i class="fab fa-telegram"></i>
    </a>
</div>
</template>
<script>
export default{
  name: 'SocialList',
}
</script>
<style>
.socials-list {
  display: flex;
  flex-direction: column;
  gap:1.7rem;
}
.fab{
  color:white;
  font-size: 1.7rem;
}
.fab:hover{
  opacity: 0.6;
}

</style>