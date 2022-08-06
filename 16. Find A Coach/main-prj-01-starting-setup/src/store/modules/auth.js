export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  getters: {
    userId: (state) => state.userId,
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
  },
  actions: {
    login() {},
    async signup(context, payload) {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMAS1HexE_4NN1LLm40tOXaBsSy7sDVzg',
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData);
        const error = new Error(
          responseData.message ||
            'Failed to authenticate. Check your login data.'
        );
        throw error;
      }

      console.log(responseData);
      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },
  },
};
