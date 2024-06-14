import { Component } from '@angular/core';
import { AbstractUsersComponent } from 'src/app/modules/users/abstract-users.component';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent extends AbstractUsersComponent {}
