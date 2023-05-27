export interface BookingList{
    id:number;
    date_booked:Date;
    Ref_code:number;
    pickup:string;
    dropup:string;
    status:string;
    fare:DoubleRange;
    state:boolean;

}