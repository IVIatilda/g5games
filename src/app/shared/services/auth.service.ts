import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GithubAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, public afAuth: AngularFireAuth) {}

  get isUserLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  get currentUser() {
    const user = localStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user);
  }

  async loginWithEmail(email: string) {
    return new Promise((resolve, reject) => {
      const actionCodeSettings = {
        url: `${environment.url}/blocks`,
        handleCodeInApp: true,
      };
      this.afAuth
        .sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => resolve(email))
        .catch((err) => reject(err));
    });
  }

  confirmSignIn() {
    this.afAuth.isSignInWithEmailLink(window.location.href).then((res) => {
      if (res) {
        let email = localStorage.getItem('emailForSignIn');
        if (!email) {
          return;
        }
        this.afAuth
          .signInWithEmailLink(email)
          .then(() => {
            localStorage.removeItem('emailForSignIn');
            localStorage.setItem(
              'user',
              JSON.stringify({ email, login: email })
            );
            this.router.navigate(['/blocks']);
          })
          .catch((error) => console.log(error));
      }
    });
  }

  loginWithGithub() {
    const provider = new GithubAuthProvider();
    this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        const user = result.user;
        localStorage.setItem(
          'user',
          JSON.stringify({
            email: user.email,
            login: user.displayName,
            avatar: user.photoURL,
          })
        );
        this.router.navigate(['/blocks']);
        return user;
      })
      .catch((error) => error);
  }

  logout() {
    this.afAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['/sign-in']);
    });
  }
}
