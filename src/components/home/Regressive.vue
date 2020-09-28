<template>
  <div class="timer">
    <TimerLeft
      class="left"
      :progressive="false"
      :timerTitle="'Regressive Timer'"
      :playTrigger="playTrigger"
      :pauseTrigger="pauseTrigger"
    />
    <TimerRight
      class="right"
      @play_timer_call="playTriggerMethod"
      @pause_timer_call="pauseTriggerMethod"
    />
  </div>
</template>

<script>
import TimerLeft from '@/components/home/Timers/TimerLeft';
import TimerRight from '@/components/home/Timers/TimerRight';

export default {
  data() {
    return {
      playTrigger: 0,
      pauseTrigger: 0
    }
  },
  methods: {
    playTriggerMethod() {
      this.playTrigger++;
    },
    pauseTriggerMethod() {
      this.pauseTrigger++;
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