import {combineReducers, Reducer} from 'redux';
import {i18nReducer} from 'react-redux-i18n';
import {IState} from './state.interface';
import {placesReducer} from '../features/places/places.reducer';
import {selectedPlacesReducer} from '../features/places/selectedPlaces.reducer';
// import {authenticationReducer} from '../features/authentication/authentication.reducer';

export const configureReducer = () => combineReducers<IState>({
    places: placesReducer,
    selectedPlaces: selectedPlacesReducer,
    i18n: i18nReducer as Reducer,
    // authentication: authenticationReducer,
});
