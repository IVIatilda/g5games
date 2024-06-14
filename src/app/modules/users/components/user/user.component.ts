import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/api/api';
import { User } from 'src/app/api/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User | null = null;
  isLoading = true;
  constructor(private route: ActivatedRoute, private client: ClientService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (!userId) return;
    this.client.getUser(userId).subscribe((data: User) => {
      this.isLoading = false;
      this.user = data;
    });
  }
}
