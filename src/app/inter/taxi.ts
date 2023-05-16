import { Driver } from "./driver";



export interface Taxi{
    id: number;
    registration: string;
    model: string;
    company:string;
    category:string;
    fair:number;
    driver:Driver;
}




