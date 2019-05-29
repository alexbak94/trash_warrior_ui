import {NetworkStatus} from '../common/interfaces';
import {SelectedPlacesStore} from './selectedPlaces.store.interface';

export const SelectedPlacesInitialState: SelectedPlacesStore = {
    data: [],
    status: NetworkStatus.NONE,
    error: undefined,
};
