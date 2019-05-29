import {RouteComponentProps} from 'react-router';
import * as React from 'react';

export interface ILandingProps extends ILandingOwnProps {

}

export interface ILandingOwnProps extends RouteComponentProps<{}> {

}

export interface IPage {
    route: string;
    titleCode: string;
    // tslint:disable-next-line:no-any
    Renderer: React.ComponentType<any>;
}
