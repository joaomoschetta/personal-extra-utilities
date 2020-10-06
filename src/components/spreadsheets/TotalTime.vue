<template>
  <div class="total-time">
    <select v-model="selected">
      <option selected disabled>Select a section</option>
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
    <p>Total time: {{ time }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      options: JSON.parse(localStorage.getItem("sections")) || [],
      selected: "",
      time: 0,
    }
  },
  watch: {
    selected: function() {
      this.$root.$emit('message_time', this.selected);
    }
  },
  mounted() {
    this.$root.$on('total_time_message', totalSectionTime => {
      this.time = totalSectionTime;
    })
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