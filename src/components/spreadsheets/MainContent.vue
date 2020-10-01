<template>
  <main id="main">
    <div class="top-line">
      <AddSection />
      <TotalTime />
    </div>

    <Table />
  </main>
</template>

<script>
import AddSection from "./AddSection";
import TotalTime from "./TotalTime";
import Table from "./Table";

export default {
  components: {
    AddSection,
    TotalTime,
    Table
  }
}
</script>

<style lang="scss">
  @import "@/scss/_variables";

  #main {
    background: $background-color;
    padding: 2.5rem 6rem;
    font-size: 1rem;
    overflow: auto;

    .top-line {
      display: flex;
      justify-content: space-between;
    }
  }
</style>