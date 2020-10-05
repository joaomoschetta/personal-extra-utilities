<template>
  <div class="daily-update">
    <form>
      <p>Daily update</p>
      <input type="text" v-model="formMessage.message" placeholder="Message">
      <div class="time">
        <input id="minutes" v-model="formMessage.time"  type="number" >
        <label for="minutes">Time (in minutes)</label>
      </div>
      <div class="section-send">
        <select id="section" v-model="formMessage.section" required>
          <option value="0" selected disabled>Selecte a section</option>
          <option v-for="(option, index) in options" :key="index" :value="option">
            {{ option }}
          </option>
        </select>
        <input type="submit" @click.prevent="submit()" value="Send">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      options: JSON.parse(localStorage.getItem("sections")) || [],
      table: JSON.parse(localStorage.getItem("table")) || [],
      formMessage: {
        date: this.getDate(),
        section: "",
        message: "mensagem",
        time: 0,
      }
    }
  },
  methods: {
    submit: function() {
      //console.log(this.formMessage);

      //this.$root.$emit('form_message_emit', this.formMessage);
      this.table.unshift(this.formMessage);
      localStorage.setItem("table", JSON.stringify(this.table));

      this.formMessage.message = "";
      this.formMessage.time = 0;    
      this.formMessage.selected = 0;
    },
    getDate: function() {
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1;
      let day = dateObj.getUTCDate();
      let year = String(dateObj.getUTCFullYear()).slice(0, 2);

      return `${month}/${day}/${year}`;
    }
  },
}
</script>

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

      input, select {
        outline: none;
      }

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

          &::-webkit-inner-spin-button, 
          &::-webkit-outer-spin-button { 
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            margin: 0; 
          }
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

          //re-style arrow of select dropdown
          @import "@/scss/_selectArrow.scss";
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