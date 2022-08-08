let timer;

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  getters: {
    userId: (state) => state.userId,
    token: (state) => state.token,
    didAutoLogout: (state) => state.didAutoLogout,
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.didAutoLogout = false;
    },
    setUserLogout(state) {
      state.token = null;
      state.userId = null;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
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

      const expiresIn = +responseData.expiresIn * 1000;
      // const expiresIn = 5000;
      const expirationDate = new Date().getTime() + expiresIn;

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);
      localStorage.setItem('tokenExpiration', expirationDate);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
      });
    },

    checkIsLoggedIn(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) return;

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      if (token && userId) {
        context.commit('setUser', {
          token,
          userId,
        });
      }
    },

    autoLogout(context) {
      context.dispatch('logout');
      context.commit('setAutoLogout');
    },

    logout(context) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');

      clearTimeout(timer);

      context.commit('setUserLogout');
    },
  },
};
