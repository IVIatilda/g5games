import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

enum formStatuses {
  Success,
  Error,
  None,
  Empty,
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email: string = '';
  formStatus = {
    status: formStatuses.None,
    message: '',
  };
  formStatuses = formStatuses;

  constructor(private authService: AuthService) {}

  get invalidInput() {
    return this.formStatus.status === formStatuses.Empty ? 'is-invalid' : '';
  }

  loginWithEmail() {
    if (!this.email) {
      this.formStatus = {
        status: formStatuses.Empty,
        message: `Ведите почту`,
      };
      return;
    }
    this.authService
      .loginWithEmail(this.email)
      .then(() => {
        this.formStatus = {
          status: formStatuses.Success,
          message: `На почту ${this.email} отправлена ссылка для входа`,
        };
        console.log(this.formStatus);
      })
      .catch((err) => {
        this.formStatus = {
          status: formStatuses.Error,
          message: `Произошла ошибка: ${err.message}`,
        };
        console.log(this.formStatus);
      });
  }

  loginWithGithub() {
    this.authService.loginWithGithub();
  }
}
