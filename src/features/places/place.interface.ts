export interface IPlace {
    label: string;
    address: string;
    position: IPosition;
    img?: string;
}

export interface IPosition {
    lat: number;
    lng: number;
}

// tslint:disable-next-line:no-any
export const deserializePlace = (serverPlace: any) => {
    if (!serverPlace) {
        return undefined;
    }
    const {label, address, position, img} = serverPlace;
     return {
         label,
         address,
         position: deserializePosition(position),
         img,
     };
};

// tslint:disable-next-line:no-any
export const deserializePosition = (serverPosition: any) => {
    if (serverPosition) {
        const {lat, lng} = serverPosition;
        if (lat !== undefined && lng !== undefined) {
            return {
                lat, lng
            };
        }
    }
    return undefined;
};
