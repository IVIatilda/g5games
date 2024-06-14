import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './modules/users/components/blocks/blocks.component';
import { TableComponent } from './modules/users/components/table/table.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SignInComponent } from './modules/autorization/sign-in/sign-in.component';
import { UserComponent } from './modules/users/components/user/user.component';
import { AuthService } from './shared/services/auth.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AuthService.prototype.isUserLoggedIn ? 'blocks' : 'sign-in'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    title: 'Авторизация',
  },
  {
    path: 'blocks',
    component: BlocksComponent,
    title: 'Блоки',
    canActivate: [AuthGuard],
  },
  {
    path: 'table',
    component: TableComponent,
    title: 'Таблица',
    canActivate: [AuthGuard],
  },
  {
    path: 'detail/:id',
    component: UserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
