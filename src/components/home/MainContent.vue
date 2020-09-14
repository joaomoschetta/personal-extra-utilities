<template>
  <main>
    <div class="timers">
      <ProgressiveTimer class="prog" />
      <RegressiveTimer class="regr" />
      <PomodoroTimer class="pomo" />
    </div>

    <div class="note-pads">
      <NotePad />
      <NotePad />
    </div>

    <div class="utils">
      <Checklist />
    </div>
  </main>
</template>

<script>
import ProgressiveTimer from './Timers/Progressive';
import RegressiveTimer from './Timers/Regressive';
import PomodoroTimer from './Timers/Pomodoro';
import NotePad from './Notes';
import Checklist from './Checklist';

export default {
    components: {
      ProgressiveTimer,
      RegressiveTimer,
      PomodoroTimer,
      NotePad,
      Checklist,
    },
}
</script>

<style lang="scss">
  @import "@/scss/_variables";

  main {
    background: $background-color;
    padding: 2.5rem 8rem;

    display: grid;
    grid-template-areas: 
      "timer timer timer"
      "note note utils";
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 4fr;
    gap: 30px;

    .timers {
      grid-area: timer;

      display: flex;
      justify-content: space-between;
      align-items: stretch;

      & > * {
        flex-basis: calc(100% - 60px);
        margin-right: 30px;

        border-radius: 15px;
        padding: 1rem;  

        &:nth-child(3) {
          margin-right: 0;
        }
      }
    }

    .note-pads {
      grid-area: note;
      display: flex;
      
      *:first-child {
        margin-right: 30px;
      }
    }

    .utils {
      grid-area: utils;
    }
  }
</style>