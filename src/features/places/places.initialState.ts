import {PlacesStore} from './palces.store.interface';
import {NetworkStatus} from '../common/interfaces';

export const PlacesInitialState: PlacesStore = {
    data: [],
    status: NetworkStatus.NONE,
    error: undefined,
};
