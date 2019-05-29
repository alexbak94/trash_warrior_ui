import actionCreatorFactory from 'typescript-fsa';
import {IError} from '../common/interfaces';
import {IPlace} from './place.interface';

export namespace PlacesActions {

    const actionCreator = actionCreatorFactory('PLACES');

    export const loadPlaces = actionCreator.async<void, IPlace[], IError>('LOAD');
}
