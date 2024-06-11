import { Component } from '@angular/core';
import { GetAccountsService } from '../../services/get-accounts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private accountsService: GetAccountsService) {}

  search(): void {
    console.log(this.searchQuery);
    
    if (this.searchQuery.trim()) {
      this.accountsService.searchUsers(this.searchQuery.trim());
    }
  }
}
