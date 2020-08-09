import { takeLatest, put } from 'redux-saga/effects'
import { ASYNC_ADD_SITUATION, ADD_SITUATION } from 'actions/situationsActions'

function * asyncAddSituation (action) {
  yield put({
    type: ADD_SITUATION,
    payload: action.payload
  })
}

export default function * rootSaga () {
  yield takeLatest(ASYNC_ADD_SITUATION, asyncAddSituation)
}
