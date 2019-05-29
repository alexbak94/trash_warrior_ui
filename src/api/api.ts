// tslint:disable-next-line:no-any
import {initialPlaces} from './api.initialState';

// tslint:disable-next-line:no-any
export const GET = (entity: string, key?: any) => {
    const data = localStorage.getItem(entity);
    if (data) {
        try {
            const currentData = JSON.parse(data);
            if (currentData && key) {
                return currentData[key];
            }
            return currentData;
        } catch (e) {
            console.info(e);
        }
    }
    return null;
};

// tslint:disable-next-line:no-any
export const POST = (data: any, entity: string, key?: string, index?: number) => {
    const rawData = localStorage.getItem(entity);
    let resultData = JSON.stringify(data);
    if (rawData && (key || index)) {
        try {
            const existingData = JSON.parse(rawData);
            existingData[key] = data;
            resultData = JSON.stringify(existingData);
        } catch (e) {
            console.info(e);
        }
    }
    localStorage.setItem(entity, resultData);
};

// tslint:disable-next-line:no-any
export const DELETE = (entity: string, key?: string, index?: number) => {
    const rawData = localStorage.getItem(entity);
    let resultData;
    if (rawData && (key || index)) {
        try {
            const existingData = JSON.parse(rawData);
            if (existingData.length) {
                existingData.splice(index, 1);
            } else {
                existingData[key] = undefined;
            }
            resultData = JSON.stringify(existingData);
        } catch (e) {
            console.info(e);
        }
    }
    localStorage.setItem(entity, resultData);
};


export const initializeStorage = () => {
    localStorage.setItem('places', JSON.stringify(initialPlaces));
    localStorage.setItem('selected-places', JSON.stringify([]));
};
