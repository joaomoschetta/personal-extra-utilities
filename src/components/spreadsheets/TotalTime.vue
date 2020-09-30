<template>
  <div class="total-time">
    <select>
      <option value="0">Design</option>
    </select>
    <p>Total time: {{ time }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      time: 10000
    }
  },
}
</script>

<style lang="scss">
  @import "@/scss/_variables.scss";

  .total-time {
    display: flex;

    & > * {
      font-size: 1rem;

      padding: 10px;
      background: $gray-color;
      border-radius: 15px;
    }

    select {
      width: 230px;

      //align text to center
      text-align: center;
      text-align-last: center;
      -moz-text-align-last: center;

      //re-style arrow of select dropdown
      @import "@/scss/_selectArrow.scss";
    }

    p {
      background: $secondary-light-color;
      margin-left: 15px;
      width: 200px;
      
      text-align: center;
      font-weight: 700;
      color: white;
    }
  }
</style>