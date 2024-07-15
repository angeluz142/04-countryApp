import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { searchType } from '../../interfaces/searchTypes';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryComponent {
  paises: Country[] = [];

  /**
   *
   */
  constructor(private _countrySrv: CountriesService) {}

  searchByCountry(word: string): void {
    this._countrySrv.searchCountries(word,searchType.Country).subscribe((countries) => {
      this.paises = countries;
      console.log(this.paises);
    });
  }
}
