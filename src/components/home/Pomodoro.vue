<template>
  <div class="timer">
    <TimerLeft
      :progressive="false"
      :timerTitle="'Pomodoro'"
      :isPomodoro="true"
      :pomodoroTime="pomodoroTime"
      :playTrigger="playTrigger"
      :pauseTrigger="pauseTrigger"
      :resetTrigger="resetTrigger"
    />

    <div class="right">
      <div class="top-line">
        <img
          src="@/assets/play-icon.png"
          @click="playTriggerMethod()"
          alt="Pause icon"
        />
        <img
          src="@/assets/pause-icon.png"
          @click="pauseTriggerMethod()"
          alt="Play icon"
        />
        <img
          class="reset"
          src="@/assets/arrow-loop-icon.png"
          @click="resetTriggerMethod()"
          alt="Reset arrow icon"
        />
      </div>
      <div class="bottom-line">
        <div class="pomodoro-break" @click="pomodoro()">
          <p>PM</p>
        </div>
        <div class="partial-break" @click="shortBreak()">
          <p class="partial-break">SB</p>
        </div>
        <div class="partial-break" @click="longBreak()">
          <p class="partial-break">LB</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimerLeft from "@/components/home/Timers/TimerLeft";

export default {
  components: {
    TimerLeft
  },
  data: function() {
    return {
      pomodoroTime: "00",
      playTrigger: 0,
      pauseTrigger: 0,
      resetTrigger: 0
    };
  },
  methods: {
    playTriggerMethod: function() {
      this.playTrigger++;
    },
    pauseTriggerMethod: function() {
      this.pauseTrigger++;
    },
    resetTriggerMethod: function() {
      this.resetTrigger++;
    },
    pomodoro: function() {
      this.pomodoroTime = "25";
    },
    shortBreak: function() {
      this.pomodoroTime = "05";
    },
    longBreak: function() {
      this.pomodoroTime = "10";
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.timer {
  background: $secondary-color;
  display: flex;
  justify-content: space-around;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 5px;

    .top-line {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        border-radius: 10px;

        &:hover {
          cursor: pointer;
          background: $secondary-light-color;
        }
      }

      .reset {
        width: 50px;
        padding: 6px;
      }
    }

    .bottom-line {
      display: flex;
      justify-content: space-between;
      margin: 0 2px 15px;

      .pomodoro-break,
      .partial-break {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        border-radius: 10px;

        p {
          font-size: 1.1rem;
          font-weight: 700;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .pomodoro-break {
        background: $secondary-dark-color;
        color: white;
      }

      .partial-break {
        background: $secondary-light-color;
      }
    }
  }
}
</style>
