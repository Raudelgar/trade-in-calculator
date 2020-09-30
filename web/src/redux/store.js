import { createStore } from 'redux';
import rootReducer from './reducres/rootReducer';
import reduxMiddleware, {
	sagaMiddleware,
} from '../middlewares/reduxMiddleware';
import rootSaga from '../sagas/rootSaga';

export default createStore(rootReducer, reduxMiddleware);

sagaMiddleware.run(rootSaga);
