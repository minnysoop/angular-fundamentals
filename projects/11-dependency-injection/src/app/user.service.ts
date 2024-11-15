import { Injectable } from '@angular/core';
import { data, User } from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: User[] = data;

  constructor() {}

  // getUserData(): Promise<User[]> {
  //   return new Promise((resolve) => {
  //     resolve(this.userData);
  //   });
  // }
  async getUserData(): Promise<User[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      return this.userData;
    }
  }

  // getUserData(): Promise<User[]> {
  //   return fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json(); // This resolves to User[]
  //   });
  // }
}
