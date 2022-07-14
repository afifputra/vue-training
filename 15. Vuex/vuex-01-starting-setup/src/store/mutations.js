export default {
  setUserAuthenticate(state) {
    state.userIsAuthenticate = true;
  },
  detachUserAuthenticate(state) {
    state.userIsAuthenticate = false;
  },
};
