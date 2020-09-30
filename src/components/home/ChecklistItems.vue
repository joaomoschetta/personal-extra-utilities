<template>
  <ul>
    <li v-for="(item, index) in items" :key="index" >
      <div class="left">
        <input type="checkbox" @change="checkedChange(index)" :checked="item.checked" >
        <p>{{ item.message }}</p>
      </div>
      <img src="@/assets/delete-icon.svg" @click="deleteItem(index)">
    </li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      items: JSON.parse(localStorage.getItem("items")) 
    }
  },
  props: {
    newTaskText: String
  },
  methods: {
    checkedChange: function(index) {
      this.items[index].checked = !this.items[index].checked;
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    }
  },
  watch: {
    items: function(newItems) {
      localStorage.setItem("items", JSON.stringify(newItems));
    },
    newTaskText: function() {
      this.items.push({message: this.newTaskText, checked: false});
    },
  },
}
</script>

<style scoped lang="scss">
  @import "@/scss/_variables.scss";

  ul {
    li{
      list-style: none;
      padding: 10px 0 0;

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
          outline: none;
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
</style>