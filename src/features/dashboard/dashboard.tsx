import * as React from 'react';
import {withRouter} from 'react-router';
import {Translate} from 'react-redux-i18n';
import {IDashboardOwnProps, IDashboardProps, IDashboardStateProps} from './dashboard.interface';
import {NavLink} from 'react-router-dom';
import {RootRoutes} from '../../router/routes';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {PlacesActions} from '../places/places.actions';
import {createStructuredSelector} from 'reselect';
import {ISelectedPlacesStorePart} from '../places/selectedPlaces.store.interface';

export const selectedPlacesSelector = (state: ISelectedPlacesStorePart) => state.selectedPlaces.data;

type Props = IDashboardStateProps & ISelectedPlacesStorePart ;

export const mapStateToPropsSelector = createStructuredSelector<Props, IDashboardOwnProps, IDashboardStateProps>({
    selectedPlaces: selectedPlacesSelector,
});

export class Dashboard extends React.Component<IDashboardProps> {

    public componentDidMount(): void {
        this.props.loadSelectedPlaces();
    }

    public render() {
        return (
            <div className={'w-100 h-100'}>
                <main
                    className={'landing w-100 h-100'}
                >
                    <div className={'text-center header'}>
                        <NavLink to={RootRoutes.HOME} className={'header-logo-section'}>
                            <img
                                className={'header-logo'}
                                alt={''}
                                src={require('../../assets/images/logo.webp')}
                            />
                            <h2>
                                <Translate value={'iam'}/>
                            </h2>
                        </NavLink>
                    </div>
                    <div>{'Dashboard : Selected Places'}</div>
                    {this.props.selectedPlaces.map((place, index) => <div key={index}>{place.label}</div>)}
                </main>
            </div>
        );
    }
}

export default compose(
    connect(
        mapStateToPropsSelector,
        {
            loadSelectedPlaces: PlacesActions.loadSelectedPlaces.started,
        }
    ),
    withRouter,
)(Dashboard);
