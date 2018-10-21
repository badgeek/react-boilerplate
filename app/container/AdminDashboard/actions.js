
import { FETCH_ACTIVE_USER, FETCH_COURSE } from './constants';


export function doFetchActiverUser() {
    // console.log(users)
      return({
        type: FETCH_ACTIVE_USER
      })
}

export function doFetchCourse() {
    // console.log(users)
      return({
        type: FETCH_COURSE
      })
}