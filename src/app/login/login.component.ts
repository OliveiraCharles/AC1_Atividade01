import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: String = ""
  password: String = ""
  

  constructor(private router: Router) { }

  login() {
    const username = String(this.username)
    const password = String(this.password)

    if (username === 'admin' && password === '123') {
      this.router.navigate(['/home']);
    } else {
      alert(`Usuário ou senha inválido`);
    }
  }

}
