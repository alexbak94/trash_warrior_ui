import * as React from 'react';
import {GoogleApiWrapper, Map, Marker, ProvidedProps} from 'google-maps-react';
import {MAP_DEFAULT_CENTER, MAP_DEFAULT_ZOOM_LEVEL} from '../../common/constants';
import {IPlace} from '../../places/place.interface';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {PlacesActions} from '../../places/places.actions';
import {IPlacesStorePart} from '../../places/palces.store.interface';
import {ActionCreator} from 'typescript-fsa';

export const placesSelector = (state: IPlacesStorePart) => state.places.data;

type Props = IMapStateProps & IPlacesStorePart ;

export const mapStateToPropsSelector = createStructuredSelector<Props, IMapOwnProps, IMapStateProps>({
    places: placesSelector,
});


export interface IMapContainerProps extends ProvidedProps, IMapOwnProps {
}

export interface IMapStateProps {
    places: IPlace[];
}

export interface IMapDispatchProps {
    loadPlaces: ActionCreator<void>;
}

export interface IMapOwnProps extends IMapStateProps, IMapDispatchProps {

}

export class MapContainer extends React.Component<IMapContainerProps> {

    public render() {

        return (
            <div id="tasks" className="container-fluid landing-map-container">
                <Map
                    google={this.props.google}
                    initialCenter={MAP_DEFAULT_CENTER}
                    zoom={MAP_DEFAULT_ZOOM_LEVEL}
                    onReady={this.loadPlaces}
                >
                    {this.props.places.map(this.renderMarker)}
                </Map>
            </div>
        );
    }

    private renderMarker = ({label, position}: IPlace, index: number) => {
        return (
            <Marker
                key={index + label}
                label={label}
                position={position}
            />
        );
    };

    private loadPlaces = () => {
        this.props.loadPlaces();
    }
}

export default compose(
    connect(
        mapStateToPropsSelector,
        {
            loadPlaces: PlacesActions.loadPlaces.started,
        }
    ),
    GoogleApiWrapper({
        apiKey: 'AIzaSyCyzDr7qrCbCSmbJTGgZ_cfTat-bjVTR_w'
    }),
)(MapContainer);
