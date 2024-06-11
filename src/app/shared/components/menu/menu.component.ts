import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(public route: ActivatedRoute) {
    console.log(route);
  }

  identify(index: any, item: any) {
    return item.name;
  }
}
