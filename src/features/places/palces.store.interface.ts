import {ITracked} from '../common/interfaces';
import {IPlace} from './place.interface';

export type PlacesStore = ITracked<IPlace[]>;

export interface IPlacesStorePart {
    places: PlacesStore;
}
