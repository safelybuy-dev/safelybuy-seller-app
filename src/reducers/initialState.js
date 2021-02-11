import { isTokenValid  } from "../requests";
export const shopping = {
  orders: [],
  isLoadingOrders: false,
  ordersError: "",

  items: [],
  isLoadingItems: false,
  itemsError: "",

  dashboard: {},
  isLoadingDashboard: false,
  dashboardError: "",

  admin: {},
  loading: false,
  error: "",

  orderActionLoading: false,
  orderActionError: "",

  itemActionLoading: false,
  itemActionError: "",
};

export const auth = {
  user: {},
  loadingUser: true,
  error: "",
  isAuthenticated: isTokenValid(),
};
