export interface IError {
    statusCode?: string;
    message?: string;
}

export interface IProgress {
    error: IError | null,
    loading: boolean
}
