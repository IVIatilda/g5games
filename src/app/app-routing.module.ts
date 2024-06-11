import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { TableComponent } from './pages/table/table.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'blocks', component: BlocksComponent, title: 'Блоки' },
  { path: 'table', component: TableComponent, title: 'Таблица' },
  { path: 'detail/:id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
