import appStore from '../../constants/appStore';

export default {
  isLoggedIn(state) {
    return state.isLoggedIn === undefined
      ? !!localStorage.getItem(appStore.KEYS.AUTH_TOKEN)
      : state.isLoggedIn;
  },
};
