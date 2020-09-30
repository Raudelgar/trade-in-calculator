import { compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxLogger from './reduxLogger';

export const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') middlewares.push(reduxLogger);

export default compose(applyMiddleware(...middlewares));
