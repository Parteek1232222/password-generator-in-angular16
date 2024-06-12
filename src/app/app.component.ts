import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  standalone:true,
  imports:[RouterOutlet, ToastrModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
  


})
export class AppComponent {
  title = 'password-generator';
  // password: string = '';
  inputval: string='';
  constructor(private toastr: ToastrService) {}
   

  
  createPassword(): void
   {
    const length = 12;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "123456789";
    const all = uppercase + lowercase + number;
    let password = "";

    while (length > password.length) {
      password += all[Math.floor(Math.random() * all.length)];      
      
    } 
    this.inputval=password;
   this.show()
  }
  show() {
    this.toastr.success("Hello");
} 

}
    
  
 
    
    
