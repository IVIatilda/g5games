import { Component } from '@angular/core';
import { User } from 'src/app/api/models';
import { AbstractUsersComponent } from 'src/app/shared/components/abstract-users/abstract-users.component';
import { GetAccountsService } from 'src/app/shared/services/get-accounts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends AbstractUsersComponent {}
