<template>
  <nav>
    <ul>
      <router-link to="/">
        <li :class="liRouteClass('/')" alt="Home navigation button" >
          <img src="@/assets/home-icon.png" alt="House icon">
        </li>
      </router-link>
      <div class="separate-bar"></div>

      <router-link to="/spreadsheet">
        <li :class="liRouteClass('/spreadsheet')" alt="Spreasheet navigation button">
          <img src="@/assets/sheet-icon.svg" alt="Spreadsheet icon">
        </li>
      </router-link>
      <div class="separate-bar"></div>

      <li :class="liRouteClass('/help')" alt="Help navigation button">
        <img src="@/assets/interrogation-icon.png" alt="Interrogation icon">
      </li>
      <div class="separate-bar"></div>
      
      <li :class="liRouteClass('/settings')" alt="Settings navigation button">
        <img src="@/assets/config-icon.png" alt="Gear icon">
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    liRouteClass: function(route) {
      if (this.$route.path == route) {
        return 'current-route';
      } else {
        return 'common';
      }
    }
  },
}
</script>

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

  //classes to define background
  //  example: if you are in the Home page the Home listItem receive current-route class
  .common {
    background-color: $primary-color;

    &:hover {
      background: $primary-dark-color;
    }
  }

  .current-route {
    background: $secondary-color;

    &:hover {
      background: $secondary-dark-color;
    }
  }
</style>