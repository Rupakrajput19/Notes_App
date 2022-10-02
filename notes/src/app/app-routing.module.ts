import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: SignInComponent},
{path: 'signup', component: SignUpComponent},
{path: 'main', component: MainComponent},
{path: 'app', component: AppointmentsComponent},
{path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
