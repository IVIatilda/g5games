import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ClientService } from 'src/app/api/api';
import { User } from 'src/app/api/models';

@Injectable({
  providedIn: 'root',
})
export class GetAccountsService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$: Observable<any[]> = this.usersSubject.asObservable();
  lastQueryResult$ = new BehaviorSubject<User[]>([]);

  constructor(private client: ClientService) {}

  searchUsers(searchQuery: string): void {
    this.client.getUsers(searchQuery).subscribe((data: any) => {
      this.usersSubject.next(data.items);
    });
  }
}
