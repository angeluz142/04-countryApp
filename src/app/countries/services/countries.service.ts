import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { searchType } from '../interfaces/searchTypes';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(private _httpClient: HttpClient) {}


  searchCountries(termino:string, tipoBusqueda:searchType): Observable<Country[]>{
    let url='';

    switch (tipoBusqueda) {
      case searchType.Capital:
        url = `${this.baseUrl}/capital/${termino}`;
        break;

        case searchType.Region:
          url = `${this.baseUrl}/region/${termino}`;
          break;

          case searchType.Country:
            url = `${this.baseUrl}/name/${termino}`;
            break;
    }
    
    return this._httpClient.get<Country[]>(url)
    .pipe(
      catchError(error=>{
        console.log(error);
        console.error(error);     
        return of([])
      })
    )
  }

  // searchCapital(termino: string): Observable<Country[]> {
  //   return this._httpClient.get<Country[]>(`${this.baseUrl}/capital/${termino}`)
  //   .pipe(
  //     catchError(error=>{
  //       console.log(error);
  //       console.error(error);
        

  //       return of([])
  //     })
  //   )
  // }

  // searchCountry(termino: string): Observable<Country[]> {
  //   return this._httpClient.get<Country[]>(`${this.baseUrl}/name/${termino}`)
  //   .pipe(
  //     catchError(error=>{
  //       console.log(error);
  //       console.error(error);  
  //       return of([])
  //     })
  //   )
  // }

  // searchRegion(termino: string): Observable<Country[]> {
  //   return this._httpClient.get<Country[]>(`${this.baseUrl}/region/${termino}`)
  //   .pipe(
  //     catchError(error=>{
  //       console.log(error);
  //       console.error(error);  
  //       return of([])
  //     })
  //   )
  // }



}
