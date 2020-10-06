<template>
  <div class="table-div">
    <table>
      <thead>
        <tr>
          <th scope="col" class="id">#ID</th>
          <th scope="col" class="date">MM/DD/YY</th>
          <th scope="col" class="section">Section</th>
          <th scope="col" class="message">Message</th>
          <th scope="col" class="time">Time (minutes)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableItems" :key="index" >
          <th scope="row">{{ index }}</th>
          <td>{{ item.date }}</td>
          <td>{{ item.section }}</td>
          <td>{{ item.message }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tableItems: JSON.parse(localStorage["table"]) || []
    }
  },
  mounted() {
    this.$root.$on('message_time', selected => {
      let filtered = this.tableItems.filter(item => {
        if(item.section == selected) {
          return true;
        }
      });
      let totalSectionTime = filtered
        .map(item => Number(item.time))
        .reduce((acc, cur) => acc + cur, 0);
      
      this.$root.$emit('total_time_message', totalSectionTime);
    })
  },
}
</script>

<style lang="scss">
  @import "@/scss/_variables.scss";

  table {
    margin-top: 30px;
    width: 100%;
    
    tr > * {
      background: $gray-color;
      text-align: center;
      font-size: 1.05rem;

      border-radius: 5px;
      padding: 10px;
    }
    
    th {
      color: white;
    }

    thead tr {
      & > * {
        background: $secondary-light-color;
      }

      .id {
        width: 65px;
        background: $primary-color;
      }

      .date {
        width: 130px;
      }

      .section {
        width: 220px;
      }

      .time {
        width: 200px;
      }
    }

    tbody {
      th {
        background: $primary-light-color;
        font-weight: 400;
      }
    }
  }
</style>