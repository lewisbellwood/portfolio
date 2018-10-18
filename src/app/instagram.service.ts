import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient) { }

  

  getInstagram(){

    let clientID: string = '22f8863d68374b84b33a94d13eb0e107';
    let redirectURI: string = 'http://lightsanddreams.co.uk';
    let accessToken: string = '620494474.22f8863.9bd058483a3a45ae93ef9b8de13e390c';
    let url: string = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`; 

    return this.http.get(url);
  }

}
