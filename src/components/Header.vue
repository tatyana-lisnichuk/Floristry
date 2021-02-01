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
.main-header {
  padding-top:100px;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px){
.main-header {
  padding-top:40px;
}
}
</style>