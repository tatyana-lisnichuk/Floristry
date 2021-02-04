<template>
  <div class="flikr-data">
      <button class="brown-btn" @click="search">Смотреть еще работы</button>
      <ul class="more-works" id="more-works" >
        <ImageFlikrCard
        v-for="image in images"
        :key="image.id"
        :image="image"
        ></ImageFlikrCard>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';
import ImageFlikrCard from "@/components/ImageFlikrCard"
export default {
name: "FlikrData",
components:{
  ImageFlikrCard
},
  data () {
    return {
    // loading: false,
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
          api_key: '7b795fb92875bd8c213bccaf59304dcc',
          tags:"bouquets , flower , floristry",
          extras: 'url_n',
          page: 1,
          format: 'json',
          nojsoncallback: 1,
          per_page: 42,
        }
      })
    },

    //убрать изображения, которые не имеют url_n (не отображаются)
computed: {
  cleanImages() {
    return this.images.filter(image => image.url_n)
  }
},
  }
}
// )
  </script>
  <style>
.more-works{
  display: flex;
  flex-wrap: wrap;
  gap:10px;
  justify-content: center;
  align-items:center;
}
.flikr-data .brown-btn{
  margin:40px 0;
z-index: 125;

}
</style>