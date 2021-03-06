import { takeLatest, call, put } from "redux-saga/effects";
import { fetchActiveUser, fetchCourse } from '../api'


import {
    FETCH_ACTIVE_USER, 
    FETCH_ACTIVE_USER_SUCCESS, 
    FETCH_ACTIVE_USER_FAILURE, 
    FETCH_COURSE,
    FETCH_COURSE_FAILURE,
    FETCH_COURSE_SUCCESS
} 
from '../constants'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(FETCH_ACTIVE_USER, fetchActiverUserSaga);
  yield takeLatest(FETCH_COURSE, fetchCourseSaga);

}

// worker saga: makes the api call when watcher saga sees the action
function* fetchActiverUserSaga() {
  try {
    const response = yield call(fetchActiveUser);
    const payload = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: FETCH_ACTIVE_USER_SUCCESS, payload });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: FETCH_ACTIVE_USER_FAILURE, error });
  }
}
// worker saga: makes the api call when watcher saga sees the action
function* fetchCourseSaga() {
    try {
      const response = yield call(fetchCourse);
      const payload = response.data;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: FETCH_COURSE_SUCCESS, payload });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: FETCH_COURSE_FAILURE, error });
    }
  }