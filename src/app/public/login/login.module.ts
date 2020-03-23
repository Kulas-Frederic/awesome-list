import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    LoginRoutingModule 
  ]
})
export class LoginModule { }
