// auth.guard.ts
import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";

export const AuthGuard: CanActivateFn = async () => {
  const angularFireAuth = inject(AngularFireAuth);
  const user = await angularFireAuth.currentUser;
  const isLoggedIn = !!user;
  return isLoggedIn;
};