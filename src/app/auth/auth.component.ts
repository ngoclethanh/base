import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [ RouterModule, ]
})
export class AuthComponent {

}
