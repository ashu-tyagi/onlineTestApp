import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector : 'app-home',
  templateUrl : './home.component.html'
})


export class AppHomeComponent {

name = 'Welcome to Exam Skill Test ';

   user ={
    name:'',
    email:'',
    testType:''
  };

  listOfTest = [{
    id:1,
    code:'ng',
    name:'Angular'
  },
  {
    id:2,
    code:'js',
    name:'JavaScript'
  },
  {
    id:3,
    code:'css',
    name:'CSS Stlying'
  },
   {
    id:4,
    code:'ctet',
    name:'CTET'
  },
  ]

    constructor(private router: Router){

    }

    submitCheck() {
    if(this.user.name && this.user.email && this.user.testType){
      
      this.nextPage();
    } else{
     alert('Input the data')
    }
    
  }

nextPage()
{
  console.log(this.user);
  // todo navigate to another page
// this.navCtrl.push(TestPage,{
//       data: this.user
//     });

this.router.navigate(['/test']);
}

}


