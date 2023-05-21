export interface BookingList{
    id:number;
    date_booked:Date;
    ref_code:number;
    pickup:string;
    dropup:string;
    status:string;
    fare:DoubleRange;
    state:boolean;

}