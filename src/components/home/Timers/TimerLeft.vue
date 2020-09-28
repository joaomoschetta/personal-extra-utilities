<template>
  <div class="left">
    <p @click="playtest()">{{ timerTitle }}</p>
    <div class="time-display">
      <input type="number" min="0" v-model="minuteElement" >
      :
      <input type="number" min="0" v-model="secondElement" >
    </div>
  </div>
</template>

<script>
import doubleDigit from "@/utils/doubleDigit.js";

export default {
  data() {
    return {
      minuteElement: "00",
      secondElement: "00",
      timerInterval: undefined,
      running: false,
    };
  },
  props: {
    progressive: Boolean,
    timerTitle: String,
    playAuxiliarVar: Number,
    pauseAuxiliarVar: Number
  },
  methods: {
    displayTime: function(mins, secs) {
      mins = String(doubleDigit(mins));
      secs = String(doubleDigit(secs));

      this.minuteElement = mins;
      this.secondElement = secs;
    },
    timer: function() {
      if(this.running) return;
      this.running = true;

      let mins = Number(this.minuteElement);
      let secs = Number(this.secondElement);


      this.timerInterval = setInterval(() => {
        if (this.progressive){
          // progressive timer
          secs++;
          
          // seconds round
          if (secs >= 60) {
            mins += Math.floor(secs / 60);
            secs = secs % 60;
          }
        } else {
          // regressive timer
          if (secs == 0 && mins == 0) return; // return if no initial value
          
          secs--;

          // seconds round
          if (secs >= 60) {
            mins += Math.floor(secs / 60);
            secs = secs % 60;
          }

          if (secs < 0) {
            secs = 59;
            mins--;
          } else if (secs <= 0 && mins <= 0) {
            this.pauseTimer();
          }
        }
        this.displayTime(mins, secs);
      }, 1000);
    },
    pauseTimer: function() {
      window.clearInterval(this.timerInterval);
      this.running = false;
    }
  },
  watch: {
    playAuxiliarVar: function() {
      this.timer();
    },
    pauseAuxiliarVar: function() {
      this.pauseTimer();
    }
  },
}
</script>

<style scoped lang="scss">
  .time-display {
    display: flex;
    font-weight: normal;
    font-size: 2.3rem;

    input {
      align-self: center;
      width: 90px;
      background: none;
      font-size: 2.3rem;

        &:nth-child(1) {
          text-align: right;
        }

        // hide border when selected
        &:focus {
          outline: none;
        }

        // hide side arrows
        &::-webkit-inner-spin-button, 
        &::-webkit-outer-spin-button {
          -webkit-appearance: none; 
          margin: 0; 
        }
    }
  }

  p {
    font-weight: 700;
    font-size: 1.25rem;
  }
</style>