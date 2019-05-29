import {ITracked} from '../common/interfaces';
import {IPlace} from './place.interface';

export type SelectedPlacesStore = ITracked<IPlace[]>;

export interface ISelectedPlacesStorePart {
    selectedPlaces: SelectedPlacesStore;
}
