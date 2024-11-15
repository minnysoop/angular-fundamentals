import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  imports: [UserInfoComponent],
  standalone: true,
  template: ` 
  <h1>User Listing</h1> 
  @for (user of userData; track user.id) {
    <app-user-info [user]="user"/>
  }
  `,
})
export class AppComponent implements OnInit {
  userService = inject(UserService)
  userData: User[] = []

  // https://stackoverflow.com/questions/35845554/angular-2-component-constructor-vs-oninit/35846307#35846307
  // Normally we use constructor to define/initialize some variables, but when we have tasks related to Angular's bindings we move to Angular's ngOnInit life cycle hook. ngOnInit is called just after the constructor call. We can also do the same work in the constructor but its preferable to use ngOnInit to start Angular's binding.

  constructor(){}
  // The constructor should only be used to initialize class members but shouldn't do actual "work"
  // constructor() {
  // // Called first time before the ngOnInit()
  //   this.userService.getUserData().then(data => {
  //     this.userData = data
  //   })
  // }

  // Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor
  async ngOnInit(): Promise<void> {
    // Called after the constructor and called  after the first ngOnChanges() 
    const data = await this.userService.getUserData();
    this.userData = data;
  }
}
