<template>
  <textarea type="text" v-model="text" />
</template>

<script>
export default {
  data: function() {
    return {
      text: ""
    };
  },
  mounted() {
    if (localStorage[this._uid]) {
      this.text = localStorage[this._uid];
    }
  },
  watch: {
    text(newText) {
      localStorage[this._uid] = newText;
    }
  }
};
</script>

<style scoped lang="scss">
textarea {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 15px;

  resize: none;

  // scroll bar style
  @import "@/scss/_scrollBar.scss";

  // hide selected border
  &:focus,
  input:focus {
    outline: 0;
  }
}
</style>
