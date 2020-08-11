import { takeLatest, put, call } from 'redux-saga/effects'
import {
  ASYNC_ADD_SITUATION,
  ADD_SITUATION,
  ASYNC_GET_SITUATIONS,
  SUCCESS_GET_SITUATIONS,
  FAILURE_GET_SITUATIONS
} from 'actions/situationsActions'
import firebase from '../api'

async function fetchData () {
  const db = firebase.firestore()
  const data = await db.collection('situation').get()
  const response = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  return response
}

function * asyncGetSituations () {
  const response = yield call(fetchData)

  try {
    yield put({
      type: SUCCESS_GET_SITUATIONS,
      payload: {
        data: response,
        loading: true,
        error: false
      }
    })
  } catch (err) {
    yield put({ type: FAILURE_GET_SITUATIONS })
  }
}

function * asyncAddSituation (action) {
  yield put({
    type: ADD_SITUATION,
    payload:
      action.payload
  })
}

export default function * rootSaga () {
  yield takeLatest(ASYNC_ADD_SITUATION, asyncAddSituation)
  yield takeLatest(ASYNC_GET_SITUATIONS, asyncGetSituations)
}
