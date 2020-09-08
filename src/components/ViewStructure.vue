<template>
  <div class="structure">
    <div class="main-grid">
      <PageNavBar class="side-nav-bar"/>
      <MainContent class="main-content"/>
    </div>

    <Footer class=".footer"/>
  </div>
</template>

<script>
import PageNavBar from './PageNavBar';
import Footer from './Footer';
import MainContent from './home/MainContent';

export default {
  components: {
    PageNavBar,
    Footer,
    MainContent
  }
}
</script>

<style lang="scss">
  .structure {
    height: 100vh;

    .main-grid {
      height: calc(100vh - 50px);

      display: grid;
      grid-template-columns: 130px auto;
      grid-template-areas: 
        "nav main";

      .side-nav-bar {
        grid-area: nav;
        height: 100%;
      }

      .main-content {
        grid-area: main;
      }
    }

    .footer{
      height: 50px;
    }
  }
</style>