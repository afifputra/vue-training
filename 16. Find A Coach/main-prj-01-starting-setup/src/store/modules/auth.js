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
    token: (state) => state.token,
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
    },
    setUserLogout(state) {
      state.token = null;
      state.userId = null;
      state.tokenExpiration = null;
    },
  },
  actions: {
    async login(context, payload) {
      return context.dispatch('auth', {
        ...payload,
        mode: 'login',
      });
    },

    async signup(context, payload) {
      return context.dispatch('auth', {
        ...payload,
        mode: 'signup',
      });
    },

    async auth(context, payload) {
      const mode = payload.mode;
      let url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMAS1HexE_4NN1LLm40tOXaBsSy7sDVzg';

      if (mode === 'signup')
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMAS1HexE_4NN1LLm40tOXaBsSy7sDVzg';

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      });
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.error.message);
        throw error;
      }

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },

    checkIsLoggedIn(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
          tokenExpiration: null,
        });
      }
    },

    logout(context) {
      context.commit('setUserLogout');
    },
  },
};
