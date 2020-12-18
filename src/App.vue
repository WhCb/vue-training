<template>
  <page-header />
  <div class="main">
    <sider v-show="$store.getters.isLoggedIn" />
    <page-container>
      <router-view />
    </page-container>
  </div>
</template>

<script>
import Sider from './components/Sider.vue';
import PageHeader from './components/PageHeader.vue';
import PageContainer from './components/PageContainer.vue';

export default {
  components: {
    PageHeader,
    Sider,
    PageContainer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;

  outline: none;
}

html {
  display: flex;
  height: 100%;

  font-family: 'Roboto', sans-serif;
}

body {
  position: relative;

  width: 100%;
  height: 100%;
  margin: 0;
}

a {
  text-decoration: none;
  user-select: none;
}

a:visited {
  color: inherit;
}

#app {
  height: 100%;
}

.main {
  display: flex;
  height: 100%;
}
</style>
