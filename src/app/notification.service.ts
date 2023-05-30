import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSubject: Subject<string> = new Subject<string>();
  public notification$: Observable<string> = this.notificationSubject.asObservable();

  sendNotification(message: string) {
    this.notificationSubject.next(message);
  }


  constructor() { }





}
