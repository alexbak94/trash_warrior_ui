export enum NetworkStatus {
    NONE,
    STARTED,
    DONE,
    FAILED,
}

export interface IError {
    code: number;
    description: string;
}

export interface ITracked<T = undefined> {
    data: T;
    status: NetworkStatus;
    error: IError;
}
