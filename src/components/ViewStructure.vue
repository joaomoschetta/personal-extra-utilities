<template>
  <div class="structure">
    <div class="main-grid">
      <nav class="side-nav-bar">
        <PageNavBar />
      </nav>
      <main class="main-content">
        <MainContent />
      </main>
    </div>

    <footer>
      <Footer />
    </footer>
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
    overflow: hidden;

    .main-grid {
      height: calc(100vh - 50px);

      display: grid;
      grid-template-columns: 150px auto;
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

    footer{
      height: 50px;
    }
  }
</style>