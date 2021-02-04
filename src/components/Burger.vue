<template>
<div id="burger"
:class="{ 'active' : isBurgerActive }"
@click.prevent="toggle">
  <div class="burger-wrapper">
    <button type="button" class="burger-button" title="Menu">
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
    </button>
  </div>
  <span class="menuName">Меню</span>
</div>
</template>

<script>
import { store, mutations } from '@/store.js';
export default{
  name: 'Burger',
computed: {
    isBurgerActive() {
        return store.isNavOpen
        // store.isFixed
    }
},
  methods: {
  toggle() {
      mutations.toggleNav()
      }
    }
}
</script>
<style>

.menuName{
  font-size: 1.25rem;
  line-height: 1.4rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color:white;
  margin-left: 1.2rem;
  position:absolute;
  top:108px;
  cursor: pointer;
}
button {
  cursor: pointer;
}
.burger{
  position: fixed;
}
.burger-wrapper{
  /* position: fixed; */
  position:absolute;
  z-index: 1001;
  margin-left: -1rem;
}
button:focus {
  outline: 0;
}
.burger-button {
  position: relative;
  height: 32px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  transition: transform .6s cubic-bezier(.165,.84,.44,1);
}
.burger-bar {
  background-color: #fff;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 1px;
  width: 23px;
  margin-top: -5px;
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #fff;
}
#burger.active .burger-bar--1 {
  transform: rotate(45deg)
}
#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg)
}
@media screen and (max-width:1050px){
  .menuName{
  top:50px;
}
}
@media screen and (max-width: 768px){
  .burger-wrapper{
    margin-left: 0rem;
  }
 .menuName{
  display: none;
  }
}
</style>