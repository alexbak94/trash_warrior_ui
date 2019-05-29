import {createStore} from 'redux';
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import {AnyAction} from 'typescript-fsa';
import {translations, Locales} from '../translations/translations';
import {configureReducer} from './reducer';
import {configureEnhancer, sagaMiddleware} from './enhancer';
import {IState} from './state.interface';
import {rootSaga} from './saga';

export const configureStore = () => {
    const reducer = configureReducer();
    const enhancer = configureEnhancer();

    const store = createStore<IState, AnyAction, {}, {}>(
        reducer,
        undefined,
        enhancer,
    );

    sagaMiddleware.run(rootSaga);
    syncTranslationWithStore(store);
    loadTranslations(translations)(store.dispatch);
    setLocale(Locales.EN_US)(store.dispatch);

    return store;
};

export default configureStore();
