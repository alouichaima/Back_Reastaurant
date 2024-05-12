import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})

export class StorageService {


  static getUserId(): string {
    const user = this.getUser();
    return user && user.id ? user.id : '';
  }


  static getUser(): any {
    const userString = localStorage.getItem(USER_KEY);
    return userString ? JSON.parse(userString) : null;
  }

  static getToken(): string | null {
    const token = localStorage.getItem(TOKEN_KEY);
    return token ? token : null;
  }

  public getTokenn(): string |null {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  signOut(): void {
    localStorage.clear();
  }


  saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getUser(): any {
    const userString = localStorage.getItem(USER_KEY);
    return userString ? JSON.parse(userString) : null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(USER_KEY);
  }
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    const decodedToken: any = this.decodeToken(token);
    const currentTime = new Date().getTime() / 1000; // Convert to seconds
    return decodedToken.exp < currentTime;
  }

  private decodeToken(token: string): any {
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    return JSON.parse(decodedPayload);
  }
}
