import * as React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router';
import {ILandingProps, IPage} from './landing.interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Translate} from 'react-redux-i18n';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Container from 'reactstrap/lib/Container';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import MainMenu from './components/mainMenu';
import {pages} from './landing.constants';
import {NotFound} from '../../components/notFound';
import {RootRoutes} from '../../router/routes';
import {compose} from 'redux';
import {NavLink} from 'react-router-dom';

export interface ILandingState {
}

export class Landing extends React.Component<ILandingProps, ILandingState> {

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
                        <MainMenu/>
                    </div>
                    <Switch>
                        <Redirect exact from={RootRoutes.ROOT} to={RootRoutes.HOME}/>
                        {pages.map(this.renderPageRoute)}
                        <Route component={NotFound}/>
                    </Switch>
                </main>
            </div>
        );
    }

    private renderPageRoute = ({route, Renderer}: IPage, index: number) => {
        return (
            <Route
                key={index}
                exact
                path={route}
                component={Renderer}
            />
        );
    }

}

export default compose(
    withRouter,
)(Landing);
