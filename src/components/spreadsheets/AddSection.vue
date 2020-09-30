<template>
  <div class="add-section">
    <input type="text" placeholder="New Section">
    <button>+ Add Section</button>
  </div>
</template>

<style lang="scss">
  @import "@/scss/_variables.scss";

  .add-section {
    & > * {
      font-size: 1rem;

      padding: 10px;
      background: $gray-color;
      border-radius: 15px;

      outline: none;
    }

    button {
      margin-left: 15px;
      background: $primary-color;

      color: white;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background: $primary-dark-color;
      }
    }
  }
</style>