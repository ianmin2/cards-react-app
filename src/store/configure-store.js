import { configureStore } from '@reduxjs/toolkit';
import createSaga from 'redux-saga';
import rootReducer from './modules';

import rootSaga from './sagas';

const sagaMiddleware = createSaga();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
