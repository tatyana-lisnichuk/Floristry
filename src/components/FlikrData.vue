<template>
  <div>
      <button class="brown-btn" @click="search">Смотреть еще работы</button>
      <ul class="more-works" id="more-works" >
      <!-- <li v-for="image in images" :key="image.id">{{image}}</li> -->
      <li class="more-works__item" v-for="image in images" :key="image.id">
        <img class="more-woks__img" :src="image.url_n" :alt="image.title">
        <div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

 import config from '../../config';
import axios from 'axios';
export default {
name: "FlikrData",
  data () {
    return {
    // loading: false,
      // tag: '',
      images: []
    }
  },
 methods: {
    search() {
      // this.loading = true;
      this.fetchImages()
        .then((response) => {
          this.images = response.data.photos.photo;
          // this.loading = false;

        })
    },
    fetchImages() {
      return axios({
        method: 'get',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.photos.search',
          // method: 'flickr.photos.setTags',
          api_key: config.apiKey,
          // tags: this.tag,
          tags:"bouquets",
          // extras: 'url_n, owner_name, date_taken, views',
          extras: 'url_n',
          page: 1,
          format: 'json',
          nojsoncallback: 1,
          per_page: 30,
        }
      })
    },
    mounted(){
      this.search()
    }
  }
}
// )
  </script>
  <style>
.more-works{
  display: flex;
  flex-wrap: wrap;
  gap:10px;
  margin: auto;
  justify-content: center;
  align-items:center;
}
li .more-works__item{
 width: 320px;
 /* width: calc(33% - 1rem); */
  /* height:400px; */
  /* border-radius: 3px; */
  width:100%;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .15);
 
}
img .more-works__img{
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}
</style>