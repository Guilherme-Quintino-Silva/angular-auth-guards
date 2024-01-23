import { Component, Inject } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private service: LoginService) { }
  logar() {
    this.service.doLogin();
  }
  deslogar() {
    this.service.doLogout();
  }
}
