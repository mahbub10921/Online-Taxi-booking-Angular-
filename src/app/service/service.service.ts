import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Taxi } from '../inter/taxi';
import { Driver } from '../inter/driver';
import { Route } from '../inter/route';
import { IncomingRequest } from '../inter/request';
import { BookingList } from '../inter/driverBookingList';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpservice: HttpClient) { }
  private URL = 'http://localhost:8080/api';

  deleteRoute(location: string) {
    return this.httpservice.delete<Route>(this.URL + '/route/' + location)
  }

  deleteTask(id: number) {
    return this.httpservice.delete<Taxi>(this.URL + '/taxi/' + id)
  }

  deleteTask2(id: number) {
    return this.httpservice.delete<Driver>(this.URL + '/driver/' + id)
  }


  create(post: Taxi) {
    return this.httpservice.post<Taxi>(this.URL + '/taxi', JSON.stringify(post), httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

saveRequest(save:IncomingRequest ){
   return this.httpservice.post<IncomingRequest>(this.URL + '/request', JSON.stringify(save), httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }







addNewBooking(add:BookingList){
return this.httpservice.post<BookingList>(this.URL + '/bookingRequest', JSON.stringify(add), httpOptions).pipe(
  catchError(this.errorHandler)
)
}



  addDriver(post: Driver) {
    return this.httpservice.post<Driver>(this.URL + '/driver', JSON.stringify(post), httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }






 find(id: number): Observable<Taxi> {
    return this.httpservice.get<Taxi>(this.URL + '/taxi/' + id)

  }

  find2(id: number): Observable<Driver> {
    return this.httpservice.get<Driver>(this.URL + '/driver/' + id)

  }

  update(post: Taxi) {
    return this.httpservice.put(this.URL + '/taxi', post);
  }


  update2(id: number, post: Driver) {
    return this.httpservice.put(this.URL + '/driver/' + id, post)
  }








setDriverBookingFalse(id:number){
return this.httpservice.get(this.URL + '/booking/' + id )
}


 setRequestFalse(id: number){
    return this.httpservice.get(this.URL + '/cus/' + id)
   }

   
   setTaxiFalse(id: number){
    return this.httpservice.get(this.URL + '/updateCustom/' + id)
   }

   errorHandler(error: any) {
    let errormessage = '';
    if (error.error instanceof ErrorEvent) {
      errormessage = error.error.message;

    }
    else {
      errormessage = `Error Code:${error.status}\nMessage: ${error.message}`
    }
    return throwError(errormessage)
  }

  getRoute() {
    const task2 = this.httpservice.get<Route[]>(this.URL + '/route')
    return task2;
  }



  



  findDistance(arg1: DoubleRange, arg2: DoubleRange, arg3: DoubleRange, arg4: DoubleRange, arg5: string) {
    return this.httpservice.get(this.URL + '/distanceCount?lat1=' + arg1 + '&lon1=' + arg2 + '&lat2=' + arg3 + '&lon2=' + arg4 + '&unit=' + arg5)
}


  getRequest() {
    const task2 = this.httpservice.get<IncomingRequest>(this.URL + '/customRequest')
    return task2;
  }



getActiveBookingList(){
  const task = this.httpservice.get<BookingList>(this.URL + '/customGet');
  return task;
}

  getAdminMessage(){
    const task = this.httpservice.get<any>(this.URL + '/adminMessage');
    return task;
  }

  getAllTaxi() {
    const task2 = this.httpservice.get<Taxi[]>(this.URL + '/custom')
    return task2;
  }

  getActiveTaxi() {
    const task2 = this.httpservice.get<Taxi[]>(this.URL + '/getCustom')
    return task2;
  }


  getTask() {
    const task = this.httpservice.get<Taxi[]>(this.URL + '/taxi')
    return task;
  }

  getTask2() {
    const task1 = this.httpservice.get<Driver[]>(this.URL + '/driver')
    return task1;




  }

}
