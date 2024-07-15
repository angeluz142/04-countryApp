import { Component, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { withNoDomReuse } from '@angular/platform-browser';
import { Country } from '../../interfaces/country';
import { searchType } from '../../interfaces/searchTypes';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {

  public paises:Country[]=[];
  /**
   *
   */
  constructor(private _countrySrv: CountriesService) {}

  searchByCapital(word: string): void {
    // console.log('Desde by-Capital');
    // console.log(word);

    this._countrySrv.searchCountries(word,searchType.Capital)
    .subscribe(countries => {
      this.paises = countries;
      console.log(this.paises);
    });
  }
}
