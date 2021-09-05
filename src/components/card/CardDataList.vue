<template>
  <div class="container">
    <h1 class="text-center">Card data List</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Card holder name</th>
          <th>Card number</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in cards" v-bind:key="card.id">
          <td>{{ card.name }}</td>
          <td>{{ card.number }}</td>
          <td>{{ card.phoneNumber }}</td>
          <td>{{ card.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  setup() {},
};
</script>