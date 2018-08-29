import {NgModule} from '@angular/core';
import {Router ,RouterModule, Routes} from '@angular/router';
import { AppHomeComponent} from './layout/home/home.component';
import { AppTestComponent} from './layout/test/test.component';



const appRoutes : Routes = [
  {
    path: '',
    component: AppHomeComponent
  },
   {
    path: 'test',
    component: AppTestComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports:[
    RouterModule
  ]

})

export class AppRoutingModule{

}