export default {
  setUserAuthenticate(context) {
    setTimeout(() => {
      context.commit('setUserAuthenticate');
      alert('Welcome!');
    }, 1000);
  },
  detachUserAuthenticate(context) {
    setTimeout(() => {
      context.commit('detachUserAuthenticate');
    }, 1000);
  },
};
