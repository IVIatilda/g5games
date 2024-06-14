import { Component } from '@angular/core';
import { AbstractUsersComponent } from 'src/app/modules/users/abstract-users.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends AbstractUsersComponent {}
