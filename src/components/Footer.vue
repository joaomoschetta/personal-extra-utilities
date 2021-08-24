<template>
  <footer>
    <p>
      <a href="https://github.com/joaomoschetta">Developer GitHub</a>
      -
      <a href="https://github.com/joaomoschetta/newtab-extra-utilities"
        >Project GitHub</a
      >
      - 2020
    </p>
  </footer>
</template>

<style lang="scss">
@import "@/scss/_variables";

footer {
  background: $background-light-color;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;

  p,
  a {
    display: inline;
    text-decoration: none;
    color: white;
  }
}
</style>
