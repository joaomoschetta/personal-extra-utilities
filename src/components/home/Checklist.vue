<template>
  <div id="check-list">
    <input type="text" placeholder="+ Add a task">

    <ul>
      <li>
        <div class="left">
          <input type="checkbox">
          <p>Task 01</p>
        </div>
        <img src="@/assets/delete-icon.svg" alt="">
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  @import "@/scss/_variables.scss";

  #check-list {
    background: $primary-light-color;
    border-radius: 15px;
    padding: 1rem;


    input {
      color: white;
      border-radius: 15px;
      width: 100%;
      padding: 5px 5px 5px 10px;
      background: $primary-color;
      font-family: $secondary-font;

      &::placeholder {
        color: white;
        padding-left: 5px;
        font-weight: 700;
      }
    }

    ul {
      li{
        list-style: none;
        padding: 10px 0;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          align-items: center;
          width: calc(100% - 35px);

          input {
            width: 20px;
            height: 20px;
            border-radius: 15px;
            flex-basis: 20px;
          }

          p {
            flex-basis: 100%;
            font-family: $secondary-font;
            font-size: 1.15rem;

            margin-left: 10px;
          }
        }

        img:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>