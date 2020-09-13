<template>
  <div class="timer">
    <div class="left">
      <p>Pomodoro</p>
      <p class="time-display">00:00</p>
    </div>

    <div class="right">
      <div class="top-line">
        <img src="@/assets/pause-icon.png" alt="Play icon">
        <img src="@/assets/play-icon.png" alt="Pause icon">
        <img class="reset" src="@/assets/arrow-loop-icon.png" alt="Reset arrow icon">
      </div>
      <div class="bottom-line">
        <div class="pomodoro-break">
          <p>PM</p>
        </div>
        <div class="partial-break">
          <p class="partial-break">SB</p>
        </div>
        <div class="partial-break">
          <p class="partial-break">LB</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/scss/_variables.scss";

  .timer {
    background: $secondary-color;
    display: flex;
    justify-content: space-around;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      p {
        font-weight: 700;
        font-size: 1.25rem;
      }

      .time-display {
        font-weight: normal;
        font-size: 2.3rem;
      }
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
        }

        .reset {
          width: 38px;
          margin: 0 5px;
        }
      }

      .bottom-line {
        display: flex;
        justify-content: space-between;
        margin: 0 2px 15px;

        .pomodoro-break, .partial-break {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4px;
          border-radius: 10px;

          p {
            font-size: 1.1rem;
            font-weight: 700;
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