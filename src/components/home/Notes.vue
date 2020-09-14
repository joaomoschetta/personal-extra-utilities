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

    // hide selected border
    &:focus, input:focus{
      outline: 0;
    }

    // scroll bar style
    &::-webkit-scrollbar {
      width: 10px;
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #2b6c42;
      border: 0px none #ffffff;
    }
    &::-webkit-scrollbar-track {
      background: #9a9a9a;
      border: 21px none #ffffff;
    }
  }
</style>