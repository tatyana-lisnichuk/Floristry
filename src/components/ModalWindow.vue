<template>
  <div class="modal">
   <div class="modal__mask">
     <div class="modal__inner-wrapper">
       <div class="modal__container">
        <div class="modal__left"></div>
        <div class="modal__right">
          <span><i class="fas fa-times close-modal"
            @click="closeModal"></i></span>
          <form method="get" action="#" class="modal__form">
            
            <label class="modal__title">оставьте свой номер и мы вам перезвоним!</label>
            <div>
              <input class="modal__input" type="text" placeholder="Имя" name="name">
            </div>
            <div>
              <input class="modal__input" type="tel" placeholder="Телефон" name="phone">
            </div>
            
            <input class="modal__submit-btn" type="submit" value="позвоните мне">
          </form>
        </div>
          
        </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
  },
  data() {
    return {
    };
},
methods:{
  closeModal(){
    this.$emit('closeModal');
  }
}
}
</script>

<style>

.modal__title {
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
  /* background-color: blue; */
  padding: 0 15px;
}
.modal__mask{
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}
.modal__inner-wrapper{
 display: table-cell;
  vertical-align: middle;
}

.modal__container {
  max-width: 716px;
  min-height: 444px;
  margin: 0px auto;
  background-color: #3b181e;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
}
.modal__left{
  width: 335px;
  min-height: 100%;
  background-image: url("/assets/imgs/form-img.jpg");
  background-repeat: no-repeat;
}

.modal__right{
   padding:22px 0;
   margin: 0 auto;
}
.modal__submit-btn{
  padding: 1rem;
  width: 100%;
  background-color: #fff;
  font-size: 11px;
  line-height: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor:pointer;
margin: 1.5rem 0 0 0;
}
.close-modal{
  font-size: 22px;
  float: right;
  margin-right: -2rem;
 cursor: pointer;
}
.modal__form{
 max-width: 250px;
 width: 100%;
  margin-top:60px;
   margin-bottom:40px;
}

.modal__input::placeholder{
  color:#fff;
}
.modal__input{
padding:1rem 1.5rem;
width: 100%;
margin:0.5rem 0;
  background-color: #3b181e;
  border:1px solid rgba(246, 246, 249, 0.2);
}

@media screen and (max-width: 670px){

.modal__title {
  letter-spacing: 0.13em;
  padding: 0 25px;
  margin:0 35px;
}
.modal__container {
  max-width: 465px;
  min-height: 600px;
}
.modal__left{
  display: none;
}

.modal__right{
   padding:44px;
}

.close-modal{
  margin-right: 0;
}
.modal__form{
 max-width: 370px;
}
};
  

</style>