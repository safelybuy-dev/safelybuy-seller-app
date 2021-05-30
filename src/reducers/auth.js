import * as type from 'actions/auth';

export default function userReducer(state, action) {
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        loadingUser: true,
        error: '',
      };
    case type.LOGIN:
      return {
        ...state,
        loadingUser: false,
        error: '',
        user: action.payload.user,
        token: localStorage.safely_buy_token,
        isAuthenticated: true,
      };
    case type.GET_USER:
      return {
        ...state,
        loadingUser: false,
        error: '',
        user: action.payload,
        isAuthenticated: true,
      };
    case type.ERROR:
      return {
        ...state,
        loadingUser: false,
        error: action.payload,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
