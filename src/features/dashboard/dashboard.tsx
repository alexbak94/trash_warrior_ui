import * as React from 'react';
import {withRouter} from 'react-router';
import {Translate} from 'react-redux-i18n';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Container from 'reactstrap/lib/Container';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import {NotFound} from '../../components/notFound';
import {IDashboardProps} from './dashboard.interface';

export class Dashboard extends React.Component<IDashboardProps> {

    public render() {
        return (
            <div>
                <main
                    className={'dashboard'}
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
                    </Jumbotron>
                    <NotFound/>
                </main>
            </div>
        );
    }
}

export default withRouter(Dashboard);
