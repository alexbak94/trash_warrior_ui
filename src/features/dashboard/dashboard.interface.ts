import {RouteComponentProps} from 'react-router';

export interface IDashboardProps extends IDashboardOwnProps {

}

export interface IDashboardOwnProps extends RouteComponentProps<{routePath?: string}> {

}
