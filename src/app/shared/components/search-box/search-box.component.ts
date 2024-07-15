import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string = '';

  @Output()
  public searchCriteria = new EventEmitter<string>();

  emitCriteria(text: string): void {
    console.log(`Desde el componente SearchBox ${text} `);
    this.searchCriteria.emit(text);
  }
}
