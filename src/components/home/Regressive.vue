<template>
  <div class="timer">
    <TimerLeft
      class="left"
      :progressive="false"
      :timerTitle="'Regressive Timer'"
      :playAuxiliarVar="playAuxiliarVar"
      :pauseAuxiliarVar="pauseAuxiliarVar"
    />
    <TimerRight
      class="right"
      @play_timer_call="playAuxiliarMethod"
      @pause_timer_call="pauseAuxiliarMethod"
    />
  </div>
</template>

<script>
import TimerLeft from '@/components/home/Timers/TimerLeft';
import TimerRight from '@/components/home/Timers/TimerRight';

export default {
  data() {
    return {
      playAuxiliarVar: 0,
      pauseAuxiliarVar: 0
    }
  },
  methods: {
    playAuxiliarMethod() {
      this.playAuxiliarVar++;
    },
    pauseAuxiliarMethod() {
      this.pauseAuxiliarVar++;
    }
  },
  components: {
    TimerLeft,
    TimerRight
  },
};
</script>

<style scoped lang="scss">
  @import "@/scss/_variables.scss";

  .timer {
    background: $primary-light-color;

    display: flex;
    justify-content: space-around;

    .left, .right {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
</style>