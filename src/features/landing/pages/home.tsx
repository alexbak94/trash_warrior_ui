import * as React from 'react';
import {Translate} from 'react-redux-i18n';
import Button from '../../../components/button';
import {NavLink} from 'react-router-dom';
import {RootRoutes} from '../../../router/routes';

export interface IHomeProps {
}

export class Home extends React.Component<IHomeProps> {

    public render() {

        return (
            <div className={'content'}>
                <div className={'text-center home-page'}>
                    <h1>
                        <Translate value={'iam'}/>
                    </h1>
                    <p>
                        <Translate value={'homePage.description'}/>
                    </p>
                    <div className={'text-center'}>
                        <NavLink to={RootRoutes.BOOKING}>
                            <Button rounded secondary>
                                <Translate value={'homePage.bookNow'}/>
                            </Button>
                        </NavLink>
                        <a href={'https://calendly.com/lily_s/product-demo-new-client'}>
                            <Button rounded>
                                <Translate value={'homePage.requestDemo'}/>
                            </Button>
                        </a>
                    </div>
                    <h1>
                        <Translate value={'iam'}/>
                    </h1>
                    <p>
                        <Translate value={'homePage.description'}/>
                    </p>
                    <div className={'text-center'}>
                        <NavLink to={RootRoutes.BOOKING}>
                            <Button rounded secondary>
                                <Translate value={'homePage.bookNow'}/>
                            </Button>
                        </NavLink>
                        <a href={'https://calendly.com/lily_s/product-demo-new-client'}>
                            <Button rounded>
                                <Translate value={'homePage.requestDemo'}/>
                            </Button>
                        </a>
                    </div>
                    <h1>
                        <Translate value={'iam'}/>
                    </h1>
                    <p>
                        <Translate value={'homePage.description'}/>
                    </p>
                    <div className={'text-center'}>
                        <NavLink to={RootRoutes.BOOKING}>
                            <Button rounded secondary>
                                <Translate value={'homePage.bookNow'}/>
                            </Button>
                        </NavLink>
                        <a href={'https://calendly.com/lily_s/product-demo-new-client'}>
                            <Button rounded>
                                <Translate value={'homePage.requestDemo'}/>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
