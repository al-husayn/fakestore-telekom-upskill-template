import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public username!: string;
  public password!: string;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  public ngOnInit(): void {}

  public login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token',JSON.stringify(response.token));
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.log('Login failed', error);
      }
    });
    
  }
}
