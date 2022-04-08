import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OptionsComponent } from './components/options/options.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'options', component: OptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
