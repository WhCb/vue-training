<template>
  <div class="sider">
    <ul>
      <li><router-link :to="ROUTE_NAMES.DASHBOARD">Dashboard</router-link></li>
      <li>
        <router-link :to="ROUTE_NAMES.PROFILES">Profiles</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ROUTE_NAMES from '../constants/routeNames.js';

export default {
  data: function() {
    return {
      ROUTE_NAMES,
    };
  },
};
</script>

<style scoped>
.sider {
  display: flex;

  width: 240px;
  height: 100%;

  color: #fff;
  background-color: #323e54;
  border-right: 1px solid #2d5278;
}
</style>
