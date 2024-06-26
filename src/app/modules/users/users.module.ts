import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/modules/users/components/table/table.component';
import { BlocksComponent } from 'src/app/modules/users/components/blocks/blocks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [TableComponent, BlocksComponent, UserComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
})
export class UsersModule {}
