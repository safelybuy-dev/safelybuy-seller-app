import { isTokenValid } from 'requests';

export const shopping = {
  orders: [],
  isLoadingOrders: false,
  ordersError: '',

  items: [],
  isLoadingItems: false,
  itemsError: '',

  dashboard: {},
  isLoadingDashboard: false,
  dashboardError: '',

  orderActionLoading: false,
  orderActionError: '',

  itemActionLoading: false,
  itemActionError: '',
};

export const auth = {
  user: {},
  loadingUser: false,
  error: '',
  isAuthenticated: isTokenValid(),
  bankDetails: null,
};
