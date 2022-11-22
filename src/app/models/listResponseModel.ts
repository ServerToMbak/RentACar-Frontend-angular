import { ResponseModel } from "./respınseModel";

export interface ListResponseModel<T> extends ResponseModel{
data:T[]
}
