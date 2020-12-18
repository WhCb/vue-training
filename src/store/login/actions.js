import appStore from '../../constants/appStore.js';

export default {
  login(context) {
    context.commit('login');
    localStorage.setItem(appStore.KEYS.AUTH_TOKEN, 'someToken');
  },
  logout(context) {
    context.commit('logout');
    localStorage.removeItem(appStore.KEYS.AUTH_TOKEN);
  },
};
