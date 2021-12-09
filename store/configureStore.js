import { applyMiddleware, createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';
import logger from 'redux-logger';

const makeStore = (context) => {
  let store;
  const sagaMiddleware = createSagaMiddleware();
  const isClient = typeof window !== 'undefined';

  const persistConfig = {
    key: 'primary',
    storage,
    whitelist: ['storeVoting'],
  };

  if (isClient) {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    if (process.env.NODE_ENV === 'development') {
      store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware, logger),
      );
    } else {
      store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
    }
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
