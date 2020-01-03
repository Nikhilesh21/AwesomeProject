import { } from "redux-saga";
import { takeLatest, put ,delay} from "redux-saga/effects";

function* ageUpAsync() {
    yield delay (4000)
  yield put({ type: "INCREASE_COUNTER_ASYNC", value: 1 });
}

function* ageDownAsync() {
    yield delay( 4000)
    yield put({ type: "DECREASE_COUNTER_ASYNC", value: 1 });
  }
  
export function* watchAgeUp() {
  yield takeLatest("INCREASE_COUNTER", ageUpAsync);
  yield takeLatest("DECREASE_COUNTER", ageDownAsync);
 
}