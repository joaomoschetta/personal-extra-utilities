<template>
  <div class="timer">
    <div class="left">
      <p>Progressive Timer</p>
      <p class="time-display">
        <input 
          type="number"
          :value="minuteElement"
        >
        :
        <input
          type="number" 
          :value="secondElement"
        >
      </p>
    </div>

    <div class="right">
      <img src="@/assets/play-icon.png" alt="Play icon">
      <img src="@/assets/pause-icon.png" alt="Pause icon">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minuteElement: "00",
      secondElement: "00"
    };
  },
  methods: {
    
  },
}
</script>

<style scoped lang="scss">
  @import "@/scss/_timerStyle.scss";
</style>