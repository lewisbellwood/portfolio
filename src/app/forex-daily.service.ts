import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ForexDailyService {

  constructor(private http: HttpClient) { }

  getForexDaily(toSymbol: String, fromSymbol: String,){

    let accessToken: string = 'I1XKPRGN6A6D4QHD';
    
    let url: string = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${fromSymbol}&to_symbol=${toSymbol}&apikey=${accessToken}`; 

    return this.http.get(url);
  }
}
