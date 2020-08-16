import { takeLatest, put, call } from 'redux-saga/effects'
import {
  ASYNC_ADD_SITUATION,
  ASYNC_GET_SITUATIONS,
  SUCCESS_GET_SITUATIONS,
  FAILURE_GET_SITUATIONS,
  ASYNC_REMOVE_SITUATION
} from 'store/actions/situationsActions'
import { CHANGE_TOAST_STATUS } from 'store/actions/toastActions'
import { fetchData, db } from '../../api'

function * asyncGetSituations () {
  const response = yield call(fetchData)

  try {
    yield put({
      type: SUCCESS_GET_SITUATIONS,
      payload: {
        data: response,
        loading: false,
        error: false
      }
    })
  } catch (err) {
    yield put({ type: FAILURE_GET_SITUATIONS })
  }
}

function * asyncAddSituation (action) {
  yield db.collection('situation').add({
    name: action.payload.name,
    description: action.payload.description
  })

  yield asyncGetSituations()
  yield put({
    type: CHANGE_TOAST_STATUS,
    payload: {
      data: true
    }
  })
}

function * asyncRemoveSituation (action) {
  yield db.collection('situation').doc(action.payload.id).delete()

  yield asyncGetSituations()
}

export default function * rootSaga () {
  yield takeLatest(ASYNC_ADD_SITUATION, asyncAddSituation)
  yield takeLatest(ASYNC_GET_SITUATIONS, asyncGetSituations)
  yield takeLatest(ASYNC_REMOVE_SITUATION, asyncRemoveSituation)
}
