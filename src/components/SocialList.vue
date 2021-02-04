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
  /* gap:1.7rem; */

}
.fab{
  font-size: 1.7rem;
}
.fab:hover{
  opacity: 0.6;
}
.social{
  margin: 1rem 1rem;
}
@media screen and (max-width: 768px){
  .socials-list {
  margin: auto;
  flex-direction: row;
  /* gap:60px; */
}
.socials-list .social {
  background-color: #3b181e;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  /* text-align: center; */
  /* display: inline-block; */
  padding:0.45rem;
}
}
@media screen and (max-width: 550px){
  .socials-list {
  /* gap:50px; */
}
}
@media screen and (max-width: 420px){
  .socials-list {
  /* gap:40px; */
}
}
</style>