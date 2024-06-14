import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  links = [
    { title: 'Блоки', url: 'blocks' },
    { title: 'Таблица', url: 'table' },
  ];
  user: any = null;

  constructor(public route: ActivatedRoute, public authService: AuthService) {
    this.user = this.authService.currentUser;
    console.log(this.user);
    
  }
}
