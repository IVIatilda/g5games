import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

enum formStatuses {
  Success,
  Error,
  None,
  Empty,
  Incorrect,
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
    return this.formStatus.status === formStatuses.Empty ||
      this.formStatus.status === formStatuses.Incorrect
      ? 'is-invalid'
      : '';
  }

  clearErrors() {
    this.formStatus = {
      status: formStatuses.None,
      message: '',
    };
  }

  loginWithEmail() {
    if (!this.email) {
      this.formStatus = {
        status: formStatuses.Empty,
        message: `Ведите почту`,
      };
      return;
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(this.email)) {
      this.formStatus = {
        status: formStatuses.Incorrect,
        message: 'Некорректный адрес электронной почты',
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
      })
      .catch((err) => {
        this.formStatus = {
          status: formStatuses.Error,
          message: `Произошла ошибка: ${err.message}`,
        };
      });
  }

  loginWithGithub() {
    this.authService.loginWithGithub();
  }
}
