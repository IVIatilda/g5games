import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

const reExports = [NgbNavModule];
const declarationsForExport = [MenuComponent, SearchComponent];

@NgModule({
  exports: [...reExports, ...declarationsForExport],
  declarations: [
    ...declarationsForExport,
    SearchComponent,
  ],
  imports: [...reExports, CommonModule, RouterModule, FormsModule],
})
export class SharedModule {}
