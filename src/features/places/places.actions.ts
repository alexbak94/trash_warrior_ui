import actionCreatorFactory from 'typescript-fsa';
import {IError} from '../common/interfaces';
import {IPlace} from './place.interface';

export namespace PlacesActions {

    const actionCreator = actionCreatorFactory('PLACES');

    export const loadPlaces = actionCreator.async<void, IPlace[], IError>('LOAD');
    export const loadSelectedPlaces = actionCreator.async<void, IPlace[], IError>('LOAD_SELECTED');
    export const choosePlace = actionCreator.async<{place: IPlace, index: number}, undefined, IError>('CHOOSE');
}
