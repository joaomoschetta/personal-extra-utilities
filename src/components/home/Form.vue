<template>
  <div class="daily-update">
    <form>
      <p>Daily update</p>
      <input type="text" placeholder="Message">
      <input id="minutes" type="number">
      <label for="minutes">Time (in minutes)</label>
      <select id="section">
        <option value="0">Design</option>
      </select>
      <input type="submit" value="Send">
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
  }
</style>