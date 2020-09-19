<template>
  <div class="timer">
    <TimerLeft class="left" :progressive="true" :timerTitle="'Progressive Timer'" />
    <TimerRight class="right" />
  </div>
</template>

<script>
import TimerLeft from '@/components/home/Timers/TimerLeft';
import TimerRight from '@/components/home/Timers/TimerRight';

export default {
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