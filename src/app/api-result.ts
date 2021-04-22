export interface ApiResult <T> {
    code: number;
    description : string;
    data : T;
}
