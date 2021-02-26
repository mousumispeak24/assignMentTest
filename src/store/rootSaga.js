import { all } from "redux-saga/effects";
import authSaga from "../containers/auth/state/sagas";
// import dashboardSaga from "../containers/dashboard/state/sagas"
export default function* rootSaga() {
  yield all([authSaga()]);
}
