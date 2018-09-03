import {NgModule} from '@angular/core';
import {  RouterModule, Routes} from '@angular/router';
import { AppHomeComponent} from './layout/home/home.component';
import { AppTestComponent} from './layout/test/test.component';
import {ResultComponent} from './layout/result/result.component';



const appRoutes: Routes = [
  {
    path: '',
    component: AppHomeComponent
  },
   {
    path: 'test',
    component: AppTestComponent
  },{
    path: 'result',
    component: ResultComponent
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
  exports : [
    RouterModule
  ]

})

export class AppRoutingModule {

}
