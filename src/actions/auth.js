import { signIn, getUser, updateProfile, changePassword } from '../api/auth';

export const LOGIN = 'LOGIN';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const action = (type, payload) => ({
  type,
  payload,
});

export const login = (dispatch, data, history, toast) => {
  dispatch(action(LOADING));
  signIn(
    (res) => {
      dispatch(action(LOGIN, res.data));
      if (res?.data?.user?.role !== 'seller') {
        toast('Access not granted', { appearance: 'error', autoDismiss: true });
        return;
      }
      toast(`Welcome back, ${res.data.user.firstname}`, {
        appearance: 'success',
        autoDismiss: true,
      });
      localStorage.setItem('safely_buy_token', res.data.token);
      localStorage.setItem('safely_buy_id', res.data.user.id);
      history.push(
        `/${
          localStorage.getItem('dashboard_view_preference')
            ? JSON.parse(
                localStorage.getItem('dashboard_view_preference')
              ).toLowerCase()
            : 'shopping'
        }`
      );
    },
    (err) => {
      if (err.response) {
        dispatch(action(ERROR, err.response.data.message));
        toast(err.response.data.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      } else {
        dispatch(action(ERROR, err.message));
        toast(err.message, { appearance: 'error', autoDismiss: true });
      }
    },
    data
  );
};

export const fetchUser = (dispatch) => {
  dispatch(action(LOADING));
  getUser(
    (res) => {
      dispatch(action(GET_USER, res.data.data));
    },
    (err) => {
      if (err.response) {
        dispatch(action(ERROR, err.response.data.message));
      } else {
        dispatch(action(ERROR, err.message));
      }
    }
  );
};

export const updateUser = (dispatch, data, toast) => {
  dispatch(action(LOADING));
  updateProfile(
    (res) => {
      dispatch(action(UPDATE_USER, res.data));
      fetchUser(dispatch);
      toast('User profile updated', {
        appearance: 'success',
        autoDismiss: true,
      });
    },
    (err) => {
      if (err.response) {
        dispatch(action(ERROR, err.response.data.message));
        toast(err.response.data.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      } else {
        dispatch(action(ERROR, err.message));
        toast(err.message, { appearance: 'error', autoDismiss: true });
      }
    },
    data
  );
};

export const updatePassword = (dispatch, data, toast, reset) => {
  dispatch(action(LOADING));
  changePassword(
    (res) => {
      dispatch(action(UPDATE_PASSWORD, res.data));
      if (res.data.status === 'error')
        toast(res.data.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      else
        toast('User password changed', {
          appearance: 'success',
          autoDismiss: true,
        });
      reset();
    },
    (err) => {
      if (err.response) {
        dispatch(action(ERROR, err.response.data.message));
        toast(err.response.data.message, {
          appearance: 'error',
          autoDismiss: true,
        });
      } else {
        dispatch(action(ERROR, err.message));
        toast(err.message, { appearance: 'error', autoDismiss: true });
      }
    },
    data
  );
};
