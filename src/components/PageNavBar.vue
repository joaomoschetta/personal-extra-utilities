<template>
  <nav>
    <ul>
      <router-link to="/">
        <li alt="Home navigation button">
          <img src="@/assets/home-icon.png" alt="House icon">
        </li>
      </router-link>
      <div class="separate-bar"></div>
      <router-link to="/spreadsheet">
        <li alt="Spreasheet navigation button">
          <img src="@/assets/sheet-icon.svg" alt="Spreadsheet icon">
        </li>
      </router-link>
      <div class="separate-bar"></div>
      <li alt="Help navigation button">
        <img src="@/assets/interrogation-icon.png" alt="Interrogation icon">
      </li>
      <div class="separate-bar"></div>
      <li alt="Settings navigation button">
        <img src="@/assets/config-icon.png" alt="Gear icon">
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  @import "@/scss/_variables";

  nav {
    background: $background-dark-color;

    ul {
      list-style: none;
      padding: 30px 15px 15px;

      li {
        height: 85px;
        width: 85px;
        padding: 15px;
        margin: 15px auto 15px;
        border-radius: 50%;
        background-color: $primary-color;

          &:hover {
            background: $primary-dark-color;
          }

          img {
            max-width: 100%;
            align-self: center;
            justify-self: center;
          }
      }

      .separate-bar {
        width: 100%;
        height: 1px;
        background: $background-light-color;
      }
    }
  }
</style>