import { combineReducers } from "redux";
import { authReducer } from "../containers/auth/state/reducers";
// import {dashboardReducer} from "../containers/dashboard/state/reducers"
export const rootReducer = combineReducers({
  auth: authReducer,
  // dashboard: dashboardReducer,
});
