import { Component,ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ FormsModule]
})
export class LoginComponent {
  @ViewChild('form') form!: NgForm;
  constructor(private authService: AuthService, private loadingService: LoadingService) {
  }
  user = {
    username : '',
    password: ''
  };


  login(): void{
      this.loadingService.setLoading(true);
      this.authService.login(this.user).subscribe(res => {
        this.loadingService.setLoading(false);
      })
  }
}
