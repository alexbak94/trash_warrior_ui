import * as React from 'react';
import {GoogleApiWrapper, Map, Marker, MarkerProps, ProvidedProps} from 'google-maps-react';
import {MAP_DEFAULT_CENTER, MAP_DEFAULT_ZOOM_LEVEL} from '../../common/constants';
import {deserializePosition, IPlace} from '../../places/place.interface';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {PlacesActions} from '../../places/places.actions';
import {IPlacesStorePart} from '../../places/palces.store.interface';
import {ActionCreator} from 'typescript-fsa';
import Button from '../../../components/button';
import {InfoWindowEx} from './InfoWindowEx';
import {NetworkStatus} from '../../common/interfaces';

export const placesSelector = (state: IPlacesStorePart) => state.places.data;
export const processSelector = (state: IPlacesStorePart) => state.places.status === NetworkStatus.STARTED;

type Props = IMapStateProps & IPlacesStorePart ;

export const mapStateToPropsSelector = createStructuredSelector<Props, IMapOwnProps, IMapStateProps>({
    places: placesSelector,
    inProcess: processSelector,
});


export interface IMapContainerProps extends ProvidedProps, IMapOwnProps {
    google: typeof google;
}

export interface IMapStateProps {
    places: IPlace[];
    inProcess: boolean;
}

export interface IMapDispatchProps {
    loadPlaces: ActionCreator<void>;
    choosePlace: ActionCreator<{place: IPlace, index: number}>;
}

export interface IMapOwnProps extends IMapStateProps, IMapDispatchProps {

}

export interface IMapState {
    showingInfoWindow: boolean;
    activeMarker: google.maps.Marker;
    selectedPlace: MarkerProps & { index: number };
}

export class MapContainer extends React.Component<IMapContainerProps, IMapState> {
    public state: IMapState = {
        showingInfoWindow: false,
        activeMarker: undefined,
        selectedPlace: undefined,
    };

    public render() {

        const imgSrc = this.state.selectedPlace && this.props.places.length && this.props.places[this.state.selectedPlace.index]
            ? this.props.places[this.state.selectedPlace.index].img
            : '';

        return (
            <div className="landing-map-container">
                <div>{this.props.inProcess ? 'Loading...' : ''}</div>
                <Map
                    google={this.props.google}
                    initialCenter={MAP_DEFAULT_CENTER}
                    zoom={MAP_DEFAULT_ZOOM_LEVEL}
                    onReady={this.loadPlaces}
                >
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div className={'d-flex align-items-center justify-content-center flex-nowrap flex-column'}>
                            <div>
                                <img
                                    alt={''}
                                    src={imgSrc}
                                />
                            </div>
                            <div className={'d-flex align-items-center justify-content-center flex-nowrap flex-column'}>
                                <h4>{this.state.selectedPlace ? this.state.selectedPlace.label : ''}</h4>
                                <h5>{'position'}</h5>
                                <Button onClick={this.choosePlace}>
                                    {'Choose'}
                                </Button>
                            </div>
                        </div>
                    </InfoWindowEx>
                    {this.props.places.map(this.renderMarker)}

                </Map>
            </div>
        );
    }

    private renderMarker = ({label, position, address}: IPlace, index: number) => {

        return (
            <Marker
                {/* tslint:disable-next-line:jsx-no-lambda no-any jsx-no-multiline-js */...{}}
                onClick={(props: MarkerProps, marker: google.maps.Marker, event: any) => this.setState({
                    selectedPlace: {...(props || {}), index},
                    activeMarker: marker,
                    showingInfoWindow: true
                })}
                key={index + label}
                label={label}
                title={address}
                position={position}
            />
        );
    };

    private loadPlaces = () => {
        this.props.loadPlaces();
    };

    private choosePlace = () => {
        this.props.choosePlace({
            place: {
                label: this.state.selectedPlace.label as string,
                address: this.state.selectedPlace.title,
                position: deserializePosition(this.state.selectedPlace.position)
            },
            index: this.state.selectedPlace.index
        });
    };
}


// @ts-ignore
export default compose(
    connect(
        mapStateToPropsSelector,
        {
            loadPlaces: PlacesActions.loadPlaces.started,
            choosePlace: PlacesActions.choosePlace.started,
        }
    ),
    GoogleApiWrapper({
        apiKey: 'AIzaSyCyzDr7qrCbCSmbJTGgZ_cfTat-bjVTR_w'
    }),
)(MapContainer);
