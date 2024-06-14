import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/api/models';
import { GetAccountsService } from 'src/app/shared/services/get-accounts.service';

@Injectable()
export abstract class AbstractUsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor(protected githubService: GetAccountsService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.githubService.users$.subscribe((users) => {
        this.users = users;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
