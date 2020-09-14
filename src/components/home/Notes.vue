<template>
  <textarea type="text" />
</template>

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
    &:focus, input:focus{
      outline: 0;
    }
  }
</style>