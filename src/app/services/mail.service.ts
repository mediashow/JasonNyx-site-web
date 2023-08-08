import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://dev-mailer.mediashow.fr/sendmail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
