<template>
  <li class="image-card">
    <img class="image-card__image" :src="image.url_n" :alt="image.title">
    <!-- <div class="image-card__body">
      <p v-if="image.title" class="image-title">{{image.title}}</p>
      <p v-else class="image-title">No Title Found</p>
      <p class="image-owner">By {{image.ownername}}</p> -->
      <!-- <section class="image-date-view-wrapper">
        <p class="image-date">{{image.datetaken}}</p>
        <p class="image-views">Views: {{image.views}}</p>
      </section> -->
    <!-- </div> -->
  </li>
</template>
<script>
export default {
  name: 'ImageCard',
  props: [ 'image' ]
}
</script>
<style>
.image-card {
  width: calc(33% - 1rem);
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .15);
 
}
 @media only screen and (max-width: 799px) {
   .image-card{
    width: calc(50% - 1rem);
   }
  }
  @media only screen and (max-width: 549px) {
   .image-card{
    width: 100%;
    margin:0;
   }
  }
.image-card__image {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 350px;
  object-fit: cover;
}
@media screen and (max-width: 768px){

}
@media screen and (max-width: 320px){}
</style>