import { takeLatest, put, call } from 'redux-saga/effects'
import {
  ASYNC_ADD_SITUATION,
  ASYNC_GET_SITUATIONS,
  SUCCESS_GET_SITUATIONS,
  FAILURE_GET_SITUATIONS,
  ASYNC_REMOVE_SITUATION
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
        loading: false,
        error: false
      }
    })
  } catch (err) {
    yield put({ type: FAILURE_GET_SITUATIONS })
  }
}

function * asyncAddSituation (action) {
  const db = firebase.firestore()
  yield db.collection('situation').add({
    name: action.payload.name,
    description: action.payload.description
  })

  yield asyncGetSituations()
}

function * asyncRemoveSituation (action) {
  const db = firebase.firestore()
  yield db.collection('situation').doc(action.payload.id).delete()

  yield asyncGetSituations()
}

export default function * rootSaga () {
  yield takeLatest(ASYNC_ADD_SITUATION, asyncAddSituation)
  yield takeLatest(ASYNC_GET_SITUATIONS, asyncGetSituations)
  yield takeLatest(ASYNC_REMOVE_SITUATION, asyncRemoveSituation)
}
