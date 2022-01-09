import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  
  private apiKey:string = 'HRTrNpMvUnEEfFgvIcNnIN1OwisMKQ5e';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';
  
  private _historicalData: string[] = [];

  public results: Gif[] = [];

  get historicalData(): string[] {
    return [...this._historicalData];
  }

  constructor(private http: HttpClient)
  {
      this._historicalData = JSON.parse(localStorage.getItem('historicalData')!) || [];
      this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  search(query: string): void {
    
    query = query.trim().toLowerCase();

    if (!this._historicalData.includes(query)) {
      this._historicalData.unshift(query);
      this._historicalData = this._historicalData.slice(0, 10);

      localStorage.setItem('historicalData', JSON.stringify(this._historicalData));
      console.log(this.historicalData);
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 10)
    .set('q', query);

     this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params}).subscribe(resp => {
       this.results = resp.data;
       localStorage.setItem('results', JSON.stringify(resp.data));
     });
  }
}
