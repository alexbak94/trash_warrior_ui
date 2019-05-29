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

export interface ILandingState {
}

export class Landing extends React.Component<ILandingProps, ILandingState> {

    public render() {
        return (
            <div>
                <main
                    className={'landing'}
                    id="landingNavbar"
                    data-spy="scroll"
                    data-target=".navbar"
                    data-offset="60"
                >
                    <Jumbotron className={'text-center'} fluid>
                        <NavbarBrand href="/">
                            <Container fluid>
                                <img
                                    className={'header-logo'}
                                    alt={''}
                                    src={require('../../assets/images/logo.webp')}
                                />
                                <h2>
                                    <Translate value={'iam'}/>
                                </h2>
                            </Container>
                        </NavbarBrand>
                        <MainMenu/>
                        <Switch>
                            <Redirect exact from={RootRoutes.ROOT} to={RootRoutes.HOME}/>
                            {pages.map(this.renderPageRoute)}
                            <Route component={NotFound}/>
                        </Switch>
                    </Jumbotron>
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
