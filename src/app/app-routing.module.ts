import { HesaplatorComponent } from './components/hesaplator/hesaplator.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/aboutMe/aboutMe.component';
import { MainComponent } from './layouts/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: MainComponent,
  children: [{
    path: "",
    component: HomeComponent
  }, {
    path: "aboutMe",
    component: AboutMeComponent
  },{
    path: "cart",
    component: HesaplatorComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
