<template>
  <div class="structure">
    <div class="main-grid">
      <PageNavBar class="side-nav-bar" />
      <HomeMainContent v-if="homePage()" class="main-content" />
      <SpreadsheetMainContent v-if="sheetPage()" class="main-content" />
    </div>

    <Footer class=".footer" />
  </div>
</template>

<script>
import PageNavBar from "./PageNavBar";
import Footer from "./Footer";
import HomeMainContent from "./home/MainContent";
import SpreadsheetMainContent from "./spreadsheets/MainContent";

export default {
  components: {
    PageNavBar,
    Footer,
    HomeMainContent,
    SpreadsheetMainContent
  },
  methods: {
    homePage: function() {
      if (this.$route.path == "/") {
        return true;
      } else {
        return false;
      }
    },
    sheetPage: function() {
      if (this.$route.path == "/spreadsheet") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.structure {
  height: 100vh;

  .main-grid {
    height: calc(100vh - 50px);

    display: grid;
    grid-template-columns: 130px auto;
    grid-template-areas: "nav main";

    .side-nav-bar {
      grid-area: nav;
      height: 100%;
    }

    .main-content {
      grid-area: main;
    }
  }

  .footer {
    height: 50px;
  }
}
</style>
