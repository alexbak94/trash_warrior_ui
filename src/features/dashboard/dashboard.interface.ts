import {RouteComponentProps} from 'react-router';
import {IPlace} from '../places/place.interface';
import {ActionCreator} from 'typescript-fsa';

export interface IDashboardProps extends IDashboardOwnProps {

}

export interface  IDashboardOwnProps extends RouteComponentProps<{routePath?: string}>, IDashboardStateProps, IDashboardDispatchProps {

}

export interface IDashboardStateProps {
    selectedPlaces: IPlace[];
}

export interface IDashboardDispatchProps {
    loadSelectedPlaces: ActionCreator<void>;
    choosePlace: ActionCreator<{place: IPlace, index: number}>;
}
