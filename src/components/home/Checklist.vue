<template>
  <div id="check-list">
    <input
      type="text"
      placeholder="+ Add a task"
      v-model="text"
      @keydown.enter="AddItem()"
    />

    <items :newTaskText="textSend" />
  </div>
</template>

<script>
import Items from "./ChecklistItems";

export default {
  components: {
    Items
  },
  data: function() {
    return {
      text: "",
      textSend: ""
    };
  },
  methods: {
    AddItem: function() {
      this.textSend = this.text;
      this.text = "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

#check-list {
  @import "@/scss/_scrollBar.scss";

  background: $primary-light-color;
  border-radius: 15px;
  padding: 1rem;

  flex-basis: 0;
  overflow-y: auto;

  input {
    color: white;
    border-radius: 15px;
    width: 100%;
    padding: 5px 5px 5px 10px;
    background: $primary-color;
    font-family: $secondary-font;
    outline: none;

    &::placeholder {
      color: white;
      padding-left: 5px;
      font-weight: 700;
    }
  }
}
</style>
