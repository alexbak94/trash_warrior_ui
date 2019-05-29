import * as React from 'react';
import {InfoWindow} from 'google-maps-react';
import * as ReactDOM from 'react-dom';

// tslint:disable-next-line:no-any
export class InfoWindowEx extends React.Component<any> {
    // tslint:disable-next-line:no-any
    private infoWindowRef: React.RefObject<any>;
    private containerElement: HTMLElement;
    constructor(props: Readonly<{}>) {
        super(props);
        this.infoWindowRef = React.createRef();
        this.onInfoWindowOpen = this.onInfoWindowOpen.bind(this);
        if (!this.containerElement) {
            this.containerElement = document.createElement('div');
        }
    }

    public onInfoWindowOpen() {
        // @ts-ignore
        ReactDOM.render(React.Children.only(this.props.children), this.containerElement);
        this.infoWindowRef.current.infowindow.setContent(this.containerElement);
    }
    public render() {

        return (
            <InfoWindow onOpen={this.onInfoWindowOpen} ref={this.infoWindowRef} marker={this.props.marker} {...this.props}/>
            );
    }
}
