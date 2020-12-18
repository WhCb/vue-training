import { createStore } from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import loginModule from './login/index.js';

const store = createStore({
  modules: {
    login: loginModule,
  },
  state: function() {
    return {};
  },
  getters,
  mutations,
  actions,
});

export default store;
