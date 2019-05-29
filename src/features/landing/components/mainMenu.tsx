import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Translate} from 'react-redux-i18n';
import {Navbar} from 'reactstrap';
import Collapse from 'reactstrap/lib/Collapse';
import {NavLink} from 'react-router-dom';
import {pages} from '../landing.constants';
import {IPage} from '../landing.interface';

export interface IMainMenuProps extends RouteComponentProps<{}>{
}

export class MainMenu extends React.Component<IMainMenuProps> {

    public render() {
        return (
            <Navbar
                light
                expand="md"
                className={'text-center'}
            >
                <Collapse
                    isOpen
                    navbar
                    className={'d-flex align-items-center justify-content-center'}
                >
                    <div className={'d-flex align-items-center justify-content-center flex-wrap'}>
                        {pages.map(this.renderMenuItem)}
                    </div>
                </Collapse>
            </Navbar>
        );
    }

    private renderMenuItem = ({titleCode, route}: IPage, index: number) => {
        return (
            <NavLink
                style={{padding: '20px', fontSize: '14px', font: 'Avenir, sans serif'}}
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
