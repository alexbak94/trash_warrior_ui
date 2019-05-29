import {RootRoutes} from '../../router/routes';
import {IPage} from './landing.interface';
import Map from './pages/map';
import Home from './pages/home';

export const pages: IPage[] = [
    {
        titleCode: 'home',
        route: RootRoutes.HOME,
        Renderer: Home
    },
    {
        titleCode: 'bookNow',
        route: RootRoutes.BOOKING,
        Renderer: Map
    },
    {
        titleCode: 'cleaningReports',
        route: RootRoutes.REPORTS,
        Renderer: props => null
    },
    {
        titleCode: 'becomeWarrior',
        route: RootRoutes.JOIN_US,
        Renderer: props => null
    },
    {
        titleCode: 'faqs',
        route: RootRoutes.FAQ,
        Renderer: props => null
    },
];
