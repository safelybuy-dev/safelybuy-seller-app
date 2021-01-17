import jwtDecode from "jwt-decode";
import axios from "axios";

export const Auth = {
  isAuthenticated() {
    const token = localStorage.safely_buy_token;
    if (!token) return false;
    const decoded = jwtDecode(token);
    if (
      !decoded ||
      !decoded.userId ||
      !decoded.userRole ||
      !decoded.iat ||
      !decoded.exp
    )
      return false;
    return decoded.exp > Date.now() / 1000 ? true : false;
  },
  signout(cb) {
    localStorage.removeItem("safely_buy_token");
    cb();
  },
};

export const axiosWithAuth = () => {
  const token = localStorage.getItem("safely_buy_token");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export default Auth;
