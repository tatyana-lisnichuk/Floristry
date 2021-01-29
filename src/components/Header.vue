 <template>
<div class="main-header-wrapper">
 <header class="main-header">
    <Logo></Logo>
    <Menu></Menu>
  </header> 
  </div>
</template>
<script>
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
export default {
  name: 'Header',
  components:{
    Logo,
    Menu
    }
}
</script>

<style>
/* .main-header-wrapper{
  background-color: blue;
} */
.main-header {
   padding-top:100px;
  display: flex;
  justify-content: space-between;
  /* margin-top: 100px; */
}
</style>