<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div class="form-row">
        <label>User Name:</label><br />
        <input v-model.trim="userName" type="text" />
      </div>
      <div class="form-row">
        <label>Password:</label><br />
        <input v-model.trim="password" type="password" />
      </div>
      <div class="form-row">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import ROUTE_NAMES from '../../constants/routeNames.js';
import { DB_URI } from '../../../config/environment.js';

export default {
  data: function() {
    return {
      userName: '',
      password: null,
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('login');

      this.$router.push(ROUTE_NAMES.DASHBOARD);
    },
  },
};
</script>

<style scoped lang="scss">
.form-container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  .form-row {
    padding: 16px;
  }
}
</style>
