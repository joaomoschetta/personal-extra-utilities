<template>
  <div class="add-section">
    <input type="text" v-model="newSection" placeholder="New Section" />
    <button @click="addSection()">+ Add Section</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sections: JSON.parse(localStorage.getItem("sections")) || [],
      newSection: ""
    };
  },
  methods: {
    addSection: function() {
      // return if the value is null or if it already exists
      if (this.newSection == "") return;
      if (this.sections.some(section => section == this.newSection)) return;

      this.sections.push(this.newSection);
      localStorage.setItem("sections", JSON.stringify(this.sections));

      this.newSection = "";
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.add-section {
  & > * {
    font-size: 1rem;

    padding: 10px;
    background: $gray-color;
    border-radius: 15px;

    outline: none;
  }

  button {
    margin-left: 15px;
    background: $primary-color;

    color: white;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background: $primary-dark-color;
    }
  }
}
</style>
