<template>
  <div class="right">
    <img src="@/assets/play-icon.png" @click="playTimer()" alt="Play icon">
    <img src="@/assets/pause-icon.png" @click="pauseTimer()" alt="Pause icon">
  </div>
</template>

<script>
export default {
  methods: {
    playTimer: function() {
      this.$root.$emit('play_timer_call');
    },
    pauseTimer: function() {
      this.$root.$emit('pause_timer_call');
    } 
  }
}
</script>

<style lang="scss">
  @import "@/scss/_variables.scss";

  .right{
    img {
      width: 60px;
      border-radius: 10px;

      &:hover {
        cursor: pointer;
        background: $primary-color;
      }
    }
  }
</style>