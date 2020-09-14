<template>
  <div class="daily-update">
    <form>
      <p>Daily update</p>
      <input type="text" placeholder="Message">
      <div class="time">
        <input id="minutes" type="number">
        <label for="minutes">Time (in minutes)</label>
      </div>
      <div class="section-send">
        <select id="section">
          <option value="0">Design</option>
        </select>
        <input type="submit" value="Send">
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  @import "@/scss/_variables.scss";

  .daily-update {
    margin-top: 30px;
    background: $primary-light-color;
    border-radius: 15px;
    padding: 1rem;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input[placeholder="Message"],
      .time,
      .section-send {
        width: 100%;
        margin-top: 15px;
      }

      input[placeholder="Message"],
      #minutes,
      select {
        padding: 10px;
        background: $gray-color;
        border-radius: 15px;
      }

      p {
        color: white;
        font-weight: bold;
      }

      .time {
        input {
          width: 100px;
          text-align: center;
        }

        label {
          font-size: 1rem;
          margin-left: 10px;
          color: white;
        }
      }

      .section-send {
        display: flex;
        justify-content: space-between;

        select {
          flex-grow: 1;
          min-width: 200px;

          //align text to center
          text-align: center;
          text-align-last: center;
          -moz-text-align-last: center;
        }

        input {
          padding: 10px;
          border-radius: 15px;
          margin-left: 15px;
          background: $secondary-color;

          color: white;
          font-weight: 700;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>