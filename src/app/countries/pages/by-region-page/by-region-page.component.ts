import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { searchType } from '../../interfaces/searchTypes';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  paises: Country[] = [];
  /**
   *
   */
  constructor(private _countrySrv: CountriesService) {}

  /**
   * Return all countries releated to a specific region.
   * @param word
   */
  searchByRegion(word: string): void {
    this._countrySrv.searchCountries(word,searchType.Region).subscribe((countries) => {
      this.paises = countries;
      console.log(this.paises);
    });
  }
}
