import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Translate} from 'react-redux-i18n';
import {Navbar} from 'reactstrap';
import Collapse from 'reactstrap/lib/Collapse';
import {NavLink} from 'react-router-dom';
import {pages} from '../landing.constants';
import {IPage} from '../landing.interface';
import Nav from 'reactstrap/lib/Nav';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import {RootRoutes} from '../../../router/routes';

export interface IMainMenuProps extends RouteComponentProps<{}>{
}

export class MainMenu extends React.Component<IMainMenuProps, {isOpen: boolean}> {

    public state = {
        isOpen: false,
    };

    private toggle = () => {
        this.setState(state => ({isOpen: !state.isOpen}));
    };

    public render() {
        return (
            <Navbar color="transperent" light expand={'lg'}>
                <NavbarToggler onClick={this.toggle} className={'mr-2 ml-auto'}/>
                <Collapse
                    isOpen={this.state.isOpen}
                    className={'d-flex align-items-center justify-content-center'}
                    navbar
                >
                    <Nav navbar>
                        <div className={'d-flex align-items-center justify-content-center flex-wrap bg-white'}>
                            {pages.map(this.renderMenuItem)}
                           {this.renderMenuItem({titleCode: 'dashboard', route: RootRoutes.DASHBOARD}, pages.length)}
                        </div>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }

    private renderMenuItem = ({titleCode, route}: Partial<IPage>, index: number) => {
        return (
            <NavLink
                style={{padding: '20px', fontSize: '14px', font: 'Avenir, sans serif', color: '#000', fontWeight: 400}}
                key={index}
                to={route}
                activeStyle={{textDecoration: 'underline'}}
            >
                <Translate value={titleCode}/>
            </NavLink>
        );
    };
}

export default withRouter(MainMenu);
