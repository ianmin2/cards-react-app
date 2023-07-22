import { delay, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../../modules/app/reducer';

function* getSettings({ payload }) {
  console.log('@getsettings');
  yield delay(1000);
  const settings = { all: [1, 2, 3, 4] };
  yield put(actions.setSettings(settings));
}
// function* start() {}

// ...args
export default function* root() {
  yield takeLatest(actions.getSettings, getSettings);
}
